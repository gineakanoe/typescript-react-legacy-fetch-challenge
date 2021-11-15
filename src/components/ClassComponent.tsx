//! Instruction:
// Using typescript, create a class component and a functional component. The class component should 
// reach out to the Geolocation API to grab your coordinates. Then using those 
// coordinates, reach out to the Open Weather API and retrieve the weather 
// information for your area.  Once you have the weather, it should be sent to the functional component to be displayed. 

//* Geolocation API
    // API DOCUMENTATION  -https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

//* Open Weather API
    // API DOCUMENTATION -https://openweathermap.org/api
    // KEY  - 8aba18f043d15359afd51db8ca1c0c89
    // ENDPOINT - api.openweathermap.org

import React from 'react';
import FunctionalComponent from './FunctionalComponent';

type GeoWeather = {
    latitude: number,
    longitude: number,
    weather: any,
    time: string,
    main: any,
    desc: any,
    icon: string,
    name: string,
}

class ClassComponent extends React.Component<{}, GeoWeather> {
    
    constructor(props: any) {
        super(props);
        this.state = {
        latitude: 0,
        longitude: 0,
        weather: [],
        time: '',
        main: {},
        desc: '',
        icon: '',
        name: '',
        }
    }


localWeather = (position: any) => {
    const lat: number = position.coords.latitude;
    const long: number = position.coords.longitude;
    const localTime = new Date().toLocaleTimeString();
    this.setState({
        latitude: lat, 
        longitude: long,
        time: localTime,
    });

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=8aba18f043d15359afd51db8ca1c0c89`)
    .then(response => response.json())
    .then(json => {
        this.setState({
            weather: json.main.temp,
            desc: json.weather[0].description,
            icon: json.weather[0].icon,
            name: json.name,
            })
        console.log(json.weather[0].description);
        console.log(json.weather[0].icon);
        console.log(json);
        })
    .catch(err => console.log(err));
    
}


    componentDidMount() {
        // setInterval(() => {
            navigator.geolocation.getCurrentPosition(this.localWeather); 
        // }, 15000)
    };


    render() {
        return (
            <div>
                <FunctionalComponent name={this.state.name} desc={this.state.desc} icon={this.state.icon} lat={this.state.latitude} long={this.state.longitude} main={this.state.main} weather={this.state.weather} time={this.state.time}/>
            </div>
        )
    }


};
export default ClassComponent;

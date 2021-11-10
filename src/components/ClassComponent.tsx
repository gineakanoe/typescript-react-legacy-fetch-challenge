//! Instruction:
// Using typescript, create a class component and a functional component. The class component should 
// reach out to the Geolocation API to grab your coordinates. Then using those 
// coordinates, reach out to the Open Weather API and retrieve the weather 
// information for your area.  Once you have the weather, it should be sent to the functional component to be displayed. 

//* Geolocation API
    // API DOCUMENTATION  -https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    // KEY  - 
    // ENDPOINT  - 

//* Open Weather API
    // API DOCUMENTATION -https://openweathermap.org/api
    // KEY  - 8aba18f043d15359afd51db8ca1c0c89
    // ENDPOINT - api.openweathermap.org

import React from 'react';
import FunctionalComponent from './FunctionalComponent';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            city: 'Indianapolis',
            apiKey: '8aba18f043d15359afd51db8ca1c0c89',
            main: {},
            weather: [],
            time: null
        }
    }

    componentDidMount() {
        this.fetchInterval = setInterval(() => {
            fetch(`${this.state.baseURL}?q=${this.state.city}&units=imperial&appid=${this.state.apiKey}`)
                .then(response => response.json())
                .then(json => this.setState({
                    main: json.main,
                    weather: json.weather
                }))
                .catch(err => console.log(err))
        }, 15000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.main.temp, this.state.main.temp);

        let localTime = new Date().toLocaleTimeString();
        
        if (prevState.main.temp !== this.state.main.temp) {
            console.log('state has changed');
            this.setState({
                time: localTime
            })
        }
    }

    componentWillUnmount() {
        console.log('clearing interval');
        clearInterval(this.fetchInterval);
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv' style={{textAlign: 'center'}}>
                    <FunctionalComponent city={this.state.city} main={this.state.main} weather={this.state.weather} time={this.state.time} />
                </div>
            </div>
        )
    }
}

export default ClassComponent;




// Resource: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

// geo = navigator.geolocation;

// // if geo object exists, can use below to test;
// if('geolocation' in navigator) {
//     /* geolocation is available */
//   } else {
//     /* geolocation IS NOT available */
//   }

// // use 'getCurrentPosition()' method to obtain user's current location
// navigator.geolocation.getCurrentPosition((position) => {
//     doSomething(position.coords.latitude, position.coords.longitude);
// });
//   // 'doSomething()' function executes when location is obtained.

// // use 'watchPosition()' for position data changes if by either device movement or more accurate geo info arrives.
// const watchID = navigator.geolocation.watchPosition((position) => {
//     doSomething(position.coords.latitude, position.coords.longitude);
// });
// // The 'watchPosition()' method returns an ID number that can be used to uniquely identify the requested 
// // position watcher; you use this value in tandem with the 'clearWatch()' method to stop watching the user's location.
// navigator.geolocation.clearWatch(watchID);

// // This object allows you to specify whether to enable high accuracy, a maximum age for the returned position 
// // value (up until this age it will be cached and reused if the same position is requested again; after this the 
// // browser will request fresh position data), and a timeout value that dictates how long the browser should 
// // attempt to get the position data for, before it times out.
// function success(position) {
//     doSomething(position.coords.latitude, position.coords.longitude);
//     // could also write it like:
//     //const latitude  = position.coords.latitude;
//     // const longitude = position.coords.longitude;

//     // ↑ Do something with your latitude and longitude ↑
//   }
  
// //   function error() {
// //     alert('Sorry, no position available.');
// //   }
//     function errorCallback(error) {
//     alert(`ERROR(${error.code}): ${error.message}`);
//   };
  
//   const options = {
//     enableHighAccuracy: true,
//     maximumAge: 30000,
//     timeout: 27000
//   };
  
//   const watchID = navigator.geolocation.watchPosition(success, error, options);

//*Example
    //In the following example the Geolocation API is used to retrieve the user's latitude and longitude. 
    // If sucessful, the available hyperlink is populated with an openstreetmap.org URL that will show their location.

    //? HTML
    // <button id = "find-me">Show my location</button><br/>
    // <p id = "status"></p>
    // <a id = "map-link" target="_blank"></a>

    //? JavaScript
    // function geoFindMe() {

    //     const status = document.querySelector('#status');
    //     const mapLink = document.querySelector('#map-link');
      
    //     mapLink.href = '';
    //     mapLink.textContent = '';
      
    //     function success(position) {
    //       const latitude  = position.coords.latitude;
    //       const longitude = position.coords.longitude;
      
    //       status.textContent = '';
    //       mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    //       mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    //     }
      
    //     function error() {
    //       status.textContent = 'Unable to retrieve your location';
    //     }
      
    //     if(!navigator.geolocation) {
    //       status.textContent = 'Geolocation is not supported by your browser';
    //     } else {
    //       status.textContent = 'Locating…';
    //       navigator.geolocation.getCurrentPosition(success, error);
    //     }
      
    //   }
      
    //   document.querySelector('#find-me').addEventListener('click', geoFindMe);

//?examples?

// fetch.js
// import React, {Component} from "react";
// import FetchDisplay from "./FetchDisplay";

// export default class Fetch extends Component {
//     constructor(props){
//         super(props)
//         this.state = {img: ''}
//     }

//     componentDidMount() {
//         console.log('Component Mounted!');

//         fetch('https://random.dog/woof.json')
//         .then(res => res.json())
//         .then(data => this.setState({img: data.url}));
        
//     };

//     render() {
//         return(
//             <div>
//                 <h2>Random Dog Photo</h2>
//                 <FetchDisplay url={this.state.img}/>
//             </div>
//         )
//     }
// }

// fetchDisplay.js
// import React from "react";

// const FetchDisplay = (props) => {

//     return(
//         <div>
//             <img src={props.url} alt='dog' />
//         </div>
//     )
// }

// export default FetchDisplay;
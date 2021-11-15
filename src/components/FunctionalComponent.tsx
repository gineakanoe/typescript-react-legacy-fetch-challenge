import React from "react";  

const FunctionalComponent = (props: any) => {


    return(
        <div>
            <div>
                <h1>Current Weather</h1>
                <h3>{Math.round(props.weather)}°</h3>
                <img src={`http://openweathermap.org/img/w/${props.weather[0]}.png`} alt='weather icon' style={{height: '50px', width: '50px'}}/>
                <p>{props.lat}, {props.long} <br />Last update at {props.time}</p>
            </div>
        </div>
    )
}

export default FunctionalComponent;

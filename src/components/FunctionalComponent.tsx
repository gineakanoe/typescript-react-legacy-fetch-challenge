import React from "react";  

const FunctionalComponent = (props: any) => {


    return(
        <div>
            <div>
                <h1>Current Weather</h1>
                <h2>{props.name}</h2>
                <h3>{Math.round(props.weather)}°</h3>
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt='weather icon' style={{height: '100px', width: '100px'}}/>
                <h4>{props.desc}</h4>
                <p>{props.lat}, {props.long} <br />Last update at {props.time}</p>
            </div>
        </div>
    )
}

export default FunctionalComponent;

import React from "react";  

const FunctionalComponent = (props: any) => {


    return(
        <div>
            <h1><u>Current Weather</u></h1>
            <h2>{props.name}</h2>
            <h3>{Math.round(props.weather)}°</h3>
            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt='weather icon' style={{height: '100px', width: '100px'}}/>
            <h4 className='uppercase'>{props.desc}</h4>
            <p>{props.lat}, {props.long} <br />Last update at {props.time}</p>
        </div>
    )
}

export default FunctionalComponent;

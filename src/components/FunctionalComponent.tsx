import React from "react";  

const FunctionalComponent = (props) => {


    return(
        <div>
            {
                Object.keys(props.main).length === 0 && props.weather.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <h1>{props.city}</h1>
                        <h3>{Math.round(props.main.temp)}°</h3>
                        <img src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} alt='weather icon' style={{height: '50px', width: '50px'}} />
                        <p style={{fontSize: '12px', marginTop: '3em'}}>Last update at {props.time}</p>
                    </div>
                )
                }
        </div>
    )
}

export default FunctionalComponent;

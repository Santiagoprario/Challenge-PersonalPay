import React from 'react';
import style from './Styles/Weather.module.css';

function Weather({name , date ,temp }) {
    
    

   
    return (
        <div className={style.container}>
            <h2>{name}</h2>
            <div>
            <p></p>
            <h1>{temp ? temp.toFixed(1): 'No se encontro la temperatura'}ºC</h1>
            </div>

        </div>
    )
}

export default Weather;

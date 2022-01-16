import React from 'react';
import style from './Styles/Weather.module.css';
import Minmax from './Minmax';


function Weather({name, country, img, temp, condition, forecast, onClose }) {
    

    return (
        <div className={style.container}>
            {!img && <button className={style.close} onClick={onClose}>X</button> }
            <section className={style.main}>
            <h2 className={style.name}>{name}</h2>
            <h4 className={style.country}>{country}</h4>
            <h1 className={style.temp}>{temp ? temp+'ºC' : ''}</h1>
            
            </section>  
            { 
              img &&
             <div className={style.condition}>
              <img src={img} alt="" />
              <p >{condition}</p>
            </div>
           }
            <div className={style.forecast}>
                {
                    forecast && forecast.map((f) => 
                    <Minmax  date={f.date} day={f.day} img={f.day.condition.icon}/>)
                }
            </div>

        </div>
    )
}

export default Weather;

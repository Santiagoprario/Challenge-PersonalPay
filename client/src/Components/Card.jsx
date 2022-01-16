import React from 'react';
import style from './Styles/Card.module.css';

export default function Card ({min, max, name, img, onClose, temp,}) {
    
  return (
      <div className={style.card}>
            <button onClick={onClose} className="close">X</button>
      <div className={style.total}>
      <div className={style.mitad1}>
      <div className={style.city}>
        <h3 >{name}</h3>
      </div>
      <div className={style.medio}>
        <div>
           <h4 className={style.ahora}> {temp} ºC</h4> 
            <div className={style.datos}>
               <h6> {min} ºC | {max}ºC </h6>
             </div>
        </div>
      </div>
     </div>
     <div className={style.mitad2}>
     <img className={style.iconoClima} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="120" height="120" alt="" />
     </div>
     </div>    
  </div>

    );
};




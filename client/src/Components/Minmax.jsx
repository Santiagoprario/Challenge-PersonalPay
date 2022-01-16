import React from 'react';
import style from './Styles/Minmax.module.css';


function Minmax({date , day , img}) {
    
    let numDay = new Date(date).getDay()
    const days = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
      ];
    
    return (
        <div className={style.container}>
           <h2 className={style.day}>{days[numDay]}    {date.slice(8)}</h2>
           {img ? <div className={style.img}>
           <img src={img} alt="" />
           </div> : ''}
           <div className={style.temp}>
           <p>{Math.round(day.maxtemp_c)}ºC</p>
           <p>{Math.round(day.mintemp_c)}ºC</p>
           </div>

        </div>
    )
}

export default Minmax

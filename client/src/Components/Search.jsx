import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getForecast } from '../Redux/Actions/index';
import style from './Styles/Search.module.css';

function Search() {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(getForecast(city));
          }}>
            <input
              className={style.input}
              type="text"
              placeholder={"Buscar ciudad..."}
              value={city}
              onChange={e => setCity(e.target.value)
              }
            />   
          </form>
          
    )
}

export default Search

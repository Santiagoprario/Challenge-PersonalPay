import React, {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Search from './Search';
import style from './Styles/Home.module.css';
import { getCurrent , getForecast } from '../Redux/Actions';
import Weather from './Weather';



function Home() {
    
    const searchedCities = useSelector(state => state.searchCities);
    const dispatch = useDispatch();
    const cityCurrent = useSelector(state => state.cityCurrent)
    const cityForecast = useSelector(state => state.cityForecast)
    const forecastCities = useSelector(state => state.forecastCities)

    useEffect(() => {
        dispatch(getCurrent())
        dispatch(getForecast())
    }, [])
    
    
    
    return (
        <div className={style.container}>
        <h2 className={style.title}>WEATHER APP CHALLENGE PERSONAL PAY</h2>
         <div className={style.actualWeather}>
          {cityCurrent ? <Weather 
                 name={cityCurrent.location?.name}
                 country={cityCurrent?.location?.country}
                 img={cityCurrent.current?.condition?.icon}
                 condition={cityCurrent.current?.condition?.text}
                 temp={cityCurrent.current?.temp_c}
                 forecast={cityForecast?.forecast}
          /> : 'none'}
    
         </div>     
         <div className={style.search}>
         <Search />
         </div>
         {forecastCities.length > 0 && forecastCities.map((f) => 
             <Weather 
             name={f.location.name}
             country={f.location.country}
            //  img={f.current?.condition.icon}
            //  condition={f.current.condition.text}
            //  temp={f.current.temp_c}
             forecast={f.forecast}
      />
         )}

        </div>
    )
}

export default Home

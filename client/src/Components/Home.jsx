import React, {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Search from './Search';
import style from './Styles/Home.module.css';
import Card from './Card';
import { getCity } from '../Redux/Actions';
import Weather from './Weather';



function Home() {
    
    const searchedCities = useSelector(state => state.searchCities);
    const dispatch = useDispatch();
    const city = useSelector(state => state.city)
    console.log(city)

    useEffect(() => {
        console.log('useeffect')
        dispatch(getCity())
    }, [])
    
    const date = new Date(city.dt)
    
    
    return (
        <div className={style.container}>
         <div className={style.actualWeather}>
          {city ? <Weather 
                 name={city.name}
                 date={city.dt}
                 temp={city.main}
          /> : 'none'}
    
         </div>   
         <div className={style.search}>
         <Search />
         </div>





        </div>
    )
}

export default Home

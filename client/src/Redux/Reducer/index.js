import {GET_CURRENT , SEARCH_CURRENT , GET_FORECAST , SEARCH_FORECAST , REMOVE_CITY} from '../Actions/index';

const initialState = {
    cityCurrent : {},
    cityForecast : {},
    searchCities: false,
    forecastCities: [],
};

const Reducer = (state=initialState, action) => {
    switch (action.type) {
    case GET_CURRENT :
         return {
             ...state,
             cityCurrent: action.payload,
         }
    case SEARCH_CURRENT :
         return {
             ...state,
             searchCities : state.searchCities + action.payload,
         }
    case GET_FORECAST :
        
       return {
             ...state,
             cityForecast : action.payload,
            }
    case SEARCH_FORECAST :
       if(action.payload === 'OK') {
        window.confirm('No se ha podido encontrar la Ciudad solicitada. Intente de otra manera.')   
        return state
       }
       if (state.forecastCities.length === 5) {
            return state;
        }
        return {
             ...state,
             forecastCities : state.forecastCities.concat(action.payload),
            }  
    case REMOVE_CITY :
       console.log(action.payload)
          return {
            ...state,
            forecastCities : state.forecastCities.filter((c) => c.location.name !== action.payload)
        }   
    default :
    return state;
    }
}



export default Reducer;
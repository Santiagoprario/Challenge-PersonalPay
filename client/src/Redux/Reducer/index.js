import {GET_CITY , SEARCH_CITY} from '../Actions/index';

const initialState = {
    city : {},
    searchCities: false,
};

const Reducer = (state=initialState, action) => {
    switch (action.type) {
     
     case GET_CITY :
         return {
             ...state,
             city : action.payload,
         }
    case SEARCH_CITY :
         return {
             ...state,
             searchCities : state.searchCities + action.payload,
         }
    default :
    return state;
    }
}



export default Reducer;
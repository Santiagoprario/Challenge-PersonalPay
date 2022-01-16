import axios from 'axios';
export const GET_CITY = 'GET_CITY';
export const SEARCH_CITY = 'SEARCH_CITY';

export function getCity (city) {
    if (!city) { 
    return (dispatch) => {
      console.log('entro sin city')
      axios.get(`http://localhost:3001/v1/location`)
      .then((response) => { 
        dispatch({
            type: GET_CITY,
            payload: response.data
        })
       })   
    }
    }
    console.log('entro a getcity')

    return (dispatch) => {
      axios.get(`http://localhost:3001/v1/forecast/${city}`)
      .then((response) => { 
        console.log(response.data)
        dispatch({
            type: SEARCH_CITY,
            payload: response.data
        })
       })   
    }
}



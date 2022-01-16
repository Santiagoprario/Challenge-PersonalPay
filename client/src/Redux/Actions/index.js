import axios from 'axios';
export const GET_CURRENT = 'GET_CURRENT';
export const SEARCH_CURRENT = 'SEARCH_CURRENT';
export const GET_FORECAST = 'GET_FORECAST';
export const SEARCH_FORECAST = 'SEARCH_FORECAST';
export const REMOVE_CITY = 'REMOVE_CITY';

export function getCurrent (city) {
    if (!city) { 
    return (dispatch) => {
      axios.get(`http://localhost:3001/v1/current`)
      .then((response) => { 
        dispatch({
            type: GET_CURRENT,
            payload: response.data
        })
       })   
    }
    }
    return (dispatch) => {
      axios.get(`http://localhost:3001/v1/current/${city}`)
      .then((response) => { 
        console.log(response.data)
        dispatch({
            type: SEARCH_CURRENT,
            payload: response.data
        })
       })   
    }
}

export function getForecast (city) {
  if (!city) { 
  return (dispatch) => {
    axios.get(`http://localhost:3001/v1/forecast`)
    .then((response) => { 
      dispatch({
          type: GET_FORECAST,
          payload: response.data
      })
     })   
  }
  }
  return (dispatch) => {
    axios.get(`http://localhost:3001/v1/forecast/${city}`)
    .then((response) => { 
      dispatch({
          type: SEARCH_FORECAST,
          payload: response.data
      })
     })   
  }
}

export function deleteCity (city) {
    return (dispatch) => { 
        dispatch({type: REMOVE_CITY, city })
    }
}


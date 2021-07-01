import axios from 'axios'
import {
    POKE_STATUS_REQUEST,
    POKE_STATUS_SUCCESS,
    POKE_STATUS_FAILURE
  } from '../helper/constants'


export const fetchPokemonsByStatus = (id) => {
    return (dispatch) => {
      dispatch(fetchPokemonsByStatusRequest())
      axios
        .get('http://localhost:3001/pokes/stats/normal/' + id)
        .then(response => {
          // response.data is the Pokemons
          dispatch(fetchPokemonsByStatusSuccess(response.data))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchPokemonsByStatusFailure(error.message))
        })
    }
  }
  
  export const fetchPokemonsByStatusRequest = () => {
    return {
      type: POKE_STATUS_REQUEST
    }
  }
  
  export const fetchPokemonsByStatusSuccess = PokemonStatus => {
    return {
      type: POKE_STATUS_SUCCESS,
      payload: PokemonStatus
    }
  }
  
  export const fetchPokemonsByStatusFailure = error => {
    return {
      type: POKE_STATUS_FAILURE,
      payload: error
    }
  }
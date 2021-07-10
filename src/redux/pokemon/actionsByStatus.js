import axios from 'axios'
import {
  POKE_STATUS_REQUEST,
  POKE_STATUS_SUCCESS,
  POKE_STATUS_FAILURE
} from '../helper/constants'


export const fetchPokemonsStats = (id) => {
  return (dispatch) => {
    dispatch(fetchPokemonsByStatusRequest())
    let url = 'http://localhost:3001/pokes/stats/normal' + (id == null ? "": "/" + id)
    axios
      .get(url)
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

export const fetchPokemonsByStatusSuccess = pokemonStats => {
  return {
    type: POKE_STATUS_SUCCESS,
    payload: pokemonStats
  }
}

export const fetchPokemonsByStatusFailure = error => {
  return {
    type: POKE_STATUS_FAILURE,
    payload: error
  }
}
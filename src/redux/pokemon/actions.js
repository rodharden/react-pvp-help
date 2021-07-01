import axios from 'axios'
import {
    POKE_REQUEST,
    POKE_SUCCESS,
    POKE_FAILURE
  } from '../helper/constants'

export const fetchPokemons = () => {
  return (dispatch) => {
    dispatch(fetchPokemonsRequest())
    axios
      .get('http://localhost:3001/pokes')
      .then(response => {
        dispatch(fetchPokemonsSuccess(response.data))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchPokemonsFailure(error.message))
      })
  }
}

export const fetchPokemonsRequest = () => {
  return {
    type: POKE_REQUEST
  }
}

export const fetchPokemonsSuccess = Pokemons => {
  return {
    type: POKE_SUCCESS,
    payload: Pokemons
  }
}

export const fetchPokemonsFailure = error => {
  return {
    type: POKE_FAILURE,
    payload: error
  }
}
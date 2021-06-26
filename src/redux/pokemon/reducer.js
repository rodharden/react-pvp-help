import {
  POKE_REQUEST,
  POKE_SUCCESS,
  POKE_FAILURE
} from '../helper/constants'

const initialState = {
  loading: false,
  pokemons: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POKE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POKE_SUCCESS:
      return {
        loading: false,
        pokemons: action.payload,
        error: ''
      }
    case POKE_FAILURE:
      return {
        loading: false,
        pokemons: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
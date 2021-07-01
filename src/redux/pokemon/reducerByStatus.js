import {
  POKE_STATUS_REQUEST,
  POKE_STATUS_SUCCESS,
  POKE_STATUS_FAILURE
} from '../helper/constants'

const initialState = {
  loading: false,
  pokemonStatus: [],
  id: 1,
  error: ''
}

const reducerByStatus = (state = initialState, action) => {
  switch (action.type) {
    case POKE_STATUS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POKE_STATUS_SUCCESS:
      return {
        loading: false,
        pokemonStatus: action.payload,
        error: ''
      }
    case POKE_STATUS_FAILURE:
      return {
        loading: false,
        pokemonStatus: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducerByStatus
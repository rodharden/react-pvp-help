import { combineReducers } from 'redux'
import pokemonReducer from './pokemon/reducer'
import pokemonByStatusReducer from './pokemon/reducerByStatus'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonStats: pokemonByStatusReducer
})

export default rootReducer
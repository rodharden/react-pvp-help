import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPokemons } from '../../redux/pokemon/actions'
import ListStatus from './ListStatus'

function getNumber(id) {
  return "https://www.serebii.net/pokedex-swsh/icon/" + String("000" + id).slice("-3") + ".png";
}

function List({ pokeData, fetchPokemons }) {
  useEffect(() => {
    fetchPokemons()
  }, [])
  return pokeData.loading ? (
    <h2>Loading</h2>
  ) : pokeData.error ? (
    <h2>{pokeData.error}</h2>
  ) : (
    <div>
      <h2>Poké List</h2>
      
      <div>
        {pokeData &&
          pokeData.pokemons &&
          pokeData.pokemons.length > 0 &&
          pokeData.pokemons.map(item => {
            return (
              <div key={item.id}>
                <div>{item.name}</div>
                <div><img alt="" src={getNumber(item.id)}></img></div>
                <div><span>{item.id}</span></div>
              </div>
            )
          }
          )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pokeData: state.pokemon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
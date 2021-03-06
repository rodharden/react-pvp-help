import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPokemons } from '../../redux/pokemon/actions'
import { fetchPokemonsStats } from '../../redux/pokemon/actionsByStatus'

function getNumber(id) {
  return "https://www.serebii.net/pokedex-swsh/icon/" + String("000" + id).slice("-3") + ".png";
}

function List({ pokeData, fetchPokemons, pokeDataStatus, fetchPokemonsStats }) {
  useEffect(() => {
    fetchPokemons()
    fetchPokemonsStats()
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
                <div>
                  {pokeDataStatus &&
                    pokeDataStatus.pokemonStats &&
                    pokeDataStatus.pokemonStats.length > 0 &&
                    pokeDataStatus.pokemonStats.filter(pokes => pokes.form === "Normal" && pokes.pokemon_id === "1").then(statsFound => {
                      return (
                        <div key={statsFound.id}>
                          <div>Attack: {statsFound.base_attack}</div>
                          <div>Defense: {statsFound.base_defense}</div>
                          <div>Stamina: {statsFound.base_stamina}</div>
                        </div>
                      )
                    })
                  }
                </div>
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
    pokeData: state.pokemon,
    pokeDataStatus: state.pokemonStats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    fetchPokemonsStats: () => dispatch(fetchPokemonsStats())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
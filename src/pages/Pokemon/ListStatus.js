import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPokemonsByStatus } from '../../redux/pokemon/actionsByStatus'

function ListStatus({ id, pokeStats, fetchPokemonsByStatus }) {
    useEffect(() => {
        console.log()
        fetchPokemonsByStatus(id)
    }, [])
    return pokeStats.loading ? (
        <h2>Loading</h2>
    ) : pokeStats.error ? (
        <h2>{pokeStats.error}</h2>
    ) : (
        <div>
            {pokeStats &&
                pokeStats.pokemonStatus &&
                pokeStats.pokemonStatus.length > 0 &&
                pokeStats.pokemonStatus.map(item => {
                    return (
                        <div key={item.pokemon_id}>
                            <div>
                                <div>{item.form}</div>
                                <div>Attack: {item.base_attack}</div>
                                <div>Defense: {item.base_defense}</div>
                                <div>Stamina: {item.base_stamina} </div>
                            </div>
                        </div>
                    )
                }
                )}
        </div>

    )
}

const mapStateToProps = state => {
    console.log()
    return {
        pokeStats: state.pokemonStats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemonsByStatus: (id) => dispatch(fetchPokemonsByStatus(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListStatus)
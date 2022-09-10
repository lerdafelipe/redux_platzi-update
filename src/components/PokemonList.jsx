import React from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css'


const PokemonList = ({pokemons}) => {
  return (
    <div className='PokemonList'>
        {pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.url} name={pokemon.name}/>
            })
        }
    </div>
  )
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList;

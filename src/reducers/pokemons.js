import { SET_FAVORITE,  SET_POKEMONS } from "../actions/types";
import {fromJS} from 'immutable';

const initialState = fromJS({
    pokemons: [],
})


export const pokemonsReucer = (state = initialState, action) =>{
    switch (action.type){
        case SET_POKEMONS:
            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_FAVORITE:
            const indexPokemon = state.get('pokemons').findIndex((elem) =>{
                return elem.get('id') === action.payload.pokemonId
            });
            
            if (indexPokemon < 0){ return state}

            const isFavorite = state.get('pokemons').get(indexPokemon).get('favorite');
            return state.setIn(['pokemons', indexPokemon, 'favorite'], !isFavorite);
        default:
            return state;
    }
}
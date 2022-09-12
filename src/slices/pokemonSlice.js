import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import {setLoading} from './uiSlice';

const initialState = {
    pokemons: []
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async(_, {dispatch})=>{
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all( 
            pokemonsRes.map( pokemon => getPokemonDetails(pokemon))
        )
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) =>{
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const indexPokemon = state.pokemons.findIndex( elem => elem.id === action.payload.pokemonId);
            if(indexPokemon >= 0){
                const isFavorite = state.pokemons[indexPokemon].favorite;

                state.pokemons[indexPokemon].favorite = !isFavorite;
            }
        }
    }
})

export const {setFavorite, setPokemons} = dataSlice.actions;

export default dataSlice.reducer;
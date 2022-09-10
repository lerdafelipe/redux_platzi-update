import { combineReducers } from "redux-immutable";
import { pokemonsReucer } from "./pokemons";
import { uiReducer } from "./ui";

const rootReducer = combineReducers({
    data: pokemonsReucer,
    ui: uiReducer,
});

export default rootReducer;
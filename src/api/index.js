import axios from 'axios';

const getPokemon = ()=>{
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => {return res.data.results})
    .catch(err => console.log(err))
;
}

export default getPokemon;
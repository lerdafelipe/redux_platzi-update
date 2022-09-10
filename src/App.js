import './App.css';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from './components/PokemonList';
import logo from './static/logo.svg';
import {setPokemons} from './actions/index';
import { useEffect} from 'react';
import {getPokemon, getPokemonDetails} from './api';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all( pokemonsRes.map( pokemon => getPokemonDetails(pokemon)))
      dispatch(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, [])


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className='logo-img' src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;

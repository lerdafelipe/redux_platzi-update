import './App.css';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from './components/PokemonList';
import logo from './static/logo.svg';
import { useEffect} from 'react';
import {getPokemon} from './api';
import { Spin } from 'antd';
import { getPokemonsWithDetails, setLoading } from './actions';


function App() {
  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'])).toJS();
  const loading = useSelector( state => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons().then(dispatch(setLoading(false)));
  }, [])


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className='logo-img' src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading ? (<Col offset={12}>
        <Spin spinning size='large'/>
      </Col>) : (<PokemonList pokemons={pokemons}/>) }
    </div>
  ); 
}

export default App;

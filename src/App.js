import './App.css';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import { connect } from 'react-redux';
import PokemonList from './components/PokemonList';
import logo from './static/logo.svg';
import {setPokemons as setPokemosActions} from './actions/index';
import { useEffect} from 'react';
import getPokemon from './api';

function App({pokemons, setPokemons}) {

  useEffect(()=>{
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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


const mapStateToProps = (state) =>({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemosActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

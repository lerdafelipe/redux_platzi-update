import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { pokemonsReucer } from './reducers/pokemons';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonsReucer);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

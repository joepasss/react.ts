import React from 'react';

import AppCSS from './App.module.css';

import pizzas from '../data/pizzas.json';
import { Pizza } from './Pizza';

const App = () => {
  return (
    <div className={AppCSS.container}>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza pizza={pizza} key={pizza.id} />;
        })}
      </ul>
    </div>
  );
};

export default App;

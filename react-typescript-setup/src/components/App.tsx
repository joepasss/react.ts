import React from 'react';

import pizzas from '../data/pizzas.json';
import { Pizza } from './Pizza';

const App = () => {
  return (
    <ul>
      {pizzas.map((pizza) => {
        return <Pizza pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
};

export default App;

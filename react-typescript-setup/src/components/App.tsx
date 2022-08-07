import React from 'react';

import AppCSS from './App.module.css';

import pizzas from '../data/pizzas.json';
import { Pizza } from './Pizza';

import PizzaSVG from '../svg/pizza.svg';

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzaSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
      </div>

      <ul>
        {pizzas.map((pizza) => {
          return <Pizza pizza={pizza} key={pizza.id} />;
        })}
      </ul>
    </div>
  );
};

export default App;

import React from 'react';
import AppCSS from './App.module.css';

// Context
import AppStateProvider from './AppState';

// images & SVGs
import PizzaSVG from '../svg/pizza.svg';

// Datas
import pizzas from '../data/pizzas.json';

// Components
import { Pizza } from './Pizza';
import Cart from './Cart';

const App = () => {
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>

        <ul>
          {pizzas.map((pizza) => {
            return <Pizza pizza={pizza} key={pizza.id} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;

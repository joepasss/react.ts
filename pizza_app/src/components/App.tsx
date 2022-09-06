import React from 'react';
import AppCSS from './App.module.css';

// Context & types
import AppStateProvider from './AppState';
import { PizzaDataType } from '../types/types';

// images & SVGs
import PizzaSVG from '../svg/pizza.svg';

// Datas
import pizzas from '../data/pizzas.json';

// Components
import Pizza from './Pizza';
import Cart from './Cart';
import SpecialOffer from './SpecialOffer';

const App = () => {
  const specialOfferPizza = pizzas.find(
    (pizza: PizzaDataType) => pizza.specialOffer
  );

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>

        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <Pizza pizza={pizza} key={pizza.id} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;

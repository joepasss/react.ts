import React, { useEffect } from 'react';

import AppCSS from './App.module.css';

import pizzas from '../data/pizzas.json';
import PizzaItem from './PizzaItem';

import PizzaSVG from '../svg/pizza.svg';
import Cart from './Cart';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';
import { PizzaDataType } from '../types';

const App = () => {
  const specialOfferPizza = pizzas.find(
    (pizza: PizzaDataType) => pizza.specialOffer
  );

  // useEffect(() => {
  //   const listener = () => {
  //     alert('HELLO');
  //   };
  //   document.addEventListener('mousedown', listener);

  //   return () => {
  //     document.removeEventListener('mousedown', listener);
  //   };
  // }, []);

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
            return <PizzaItem pizza={pizza} key={pizza.id} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;

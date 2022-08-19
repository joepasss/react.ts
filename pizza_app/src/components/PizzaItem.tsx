import React, { FC } from 'react';
import PizzaCSS from './Pizza.module.css';
import { PizzaDataType } from '../types';
import { AddToCartProps, withAddToCart } from './AddToCart';

interface Props extends AddToCartProps {
  pizza: PizzaDataType;
}

const PizzaItem: FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type='button' onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
};

export default withAddToCart(PizzaItem);

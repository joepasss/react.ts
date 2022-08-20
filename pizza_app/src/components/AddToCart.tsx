import React from 'react';
import { CartItem, useDispatch } from './AppState';

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export function withAddToCart<OriginalProps extends AddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddtoCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useDispatch();

    const handleAddToCartClick: AddToCartProps['addToCart'] = (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item,
        },
      });
    };

    return (
      <ChildComponent
        {...(props as OriginalProps)}
        addToCart={handleAddToCartClick}
      />
    );
  };

  return AddtoCartHOC;
}

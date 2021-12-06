import React from 'react';
import useShoppingCart from '../../hooks/useShoppingCart';

// import { Container } from './styles';

const ShoppingCart: React.FC = () => {
  const [shoppingCartProducts, setShoppingCartProducts] = useShoppingCart();

  return (
    <div>
      {shoppingCartProducts.map((shoppingCartProduct, index) => (
        <div key={String(index)}>
          {JSON.stringify(shoppingCartProduct, null, 2)}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;

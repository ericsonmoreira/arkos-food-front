import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ShoppingCartContextState {
  shoppingCartProducts: ProductData[];
  setShoppingCartProducts: (value: ProductData[]) => void;
  addShoppingCartProduct: (value: ProductData) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextState>(
  {} as ShoppingCartContextState
);

const ShoppingCartProvider: React.FC = ({ children }) => {
  const [shoppingCartProducts, setShoppingCartProducts] = useLocalStorage<
    ProductData[]
  >('shoppingCartProducts', []);

  const addShoppingCartProduct = (product: ProductData) => {
    if (!shoppingCartProducts.some((item) => item.id === product.id)) {
      setShoppingCartProducts([...shoppingCartProducts, product]);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartProducts,
        setShoppingCartProducts,
        addShoppingCartProduct
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

function useShoppingCart(): ShoppingCartContextState {
  const context = useContext(ShoppingCartContext);
  return context;
}

export { ShoppingCartProvider, useShoppingCart };

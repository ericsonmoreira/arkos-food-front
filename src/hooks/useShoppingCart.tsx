import useLocalStorage from './useLocalStorage';

export interface ShoppingCartProduct {
  name: string;
  price: number;
}

function useShoppingCart(): [
  ShoppingCartProduct[],
  (value: ShoppingCartProduct[]) => void
  ] {
  const [shoppingCartProducts, setShoppingCartProducts] = useLocalStorage<
    ShoppingCartProduct[]
  >('arkosFoodShoppingCartProducts', []);

  return [shoppingCartProducts, setShoppingCartProducts];
}

export default useShoppingCart;

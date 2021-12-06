import { useApiWithSwr } from './useApiWithSwr';

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

function useProducts() {
  const { data, ...rest } = useApiWithSwr<Product[]>({
    url: '/products'
  });

  return { data, ...rest };
}

export default useProducts;

import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartProductCard from '../../components/ShoppingCartProductCard';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Container, TotalPrice } from './styles';

const ShoppingCart: React.FC = () => {
  const { shoppingCartProducts } = useShoppingCart();

  const totalPrice = shoppingCartProducts.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <Container>
      <Stack spacing={2}>
        {shoppingCartProducts.map((product) => (
          <ShoppingCartProductCard key={String(product.id)} data={product} />
        ))}
        <TotalPrice>
          <Typography color="primary">
            Total:{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalPrice)}
          </Typography>
          <Button variant="contained">Comprar</Button>
        </TotalPrice>
      </Stack>
    </Container>
  );
};

export default ShoppingCart;

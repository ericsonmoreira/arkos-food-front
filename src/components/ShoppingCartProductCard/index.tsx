import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  ProductData,
  useShoppingCart
} from '../../context/ShoppingCartContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { RatingWrapper } from './styles';

interface ShoppingCartProductCardProps {
  data: ProductData;
}

const ShoppingCartProductCard: React.FC<ShoppingCartProductCardProps> = (
  props
) => {
  const { data } = props;

  const { shoppingCartProducts, setShoppingCartProducts } = useShoppingCart();

  const handleDeleteButton = () => {
    setShoppingCartProducts(
      shoppingCartProducts.filter((item) => item.id !== data.id)
    );
  };

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia component="img" sx={{ width: 151 }} image={data.image} />
      <CardContent
        sx={{ display: 'flex', flex: '1', justifyContent: 'space-between' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            justifyContent: 'space-between'
          }}
        >
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>
          <RatingWrapper>
            <Rating value={data.rating.rate} readOnly />
            <Typography sx={{ marginLeft: 1 }} color="#D4D9E6">
              ({data.rating.count})
            </Typography>
          </RatingWrapper>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            flex: '1',
            justifyContent: 'space-between'
          }}
        >
          <IconButton
            edge="end"
            color="warning"
            size="large"
            onClick={handleDeleteButton}
          >
            <DeleteOutlineIcon />
          </IconButton>
          <Typography color="primary">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(data.price)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ShoppingCartProductCard;

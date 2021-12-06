import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography
} from '@mui/material';

import { RatingWrapper } from './styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ProductData, useShoppingCart } from '../../context/ShoppingCartContext';

interface ProductCardProps {
  data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { data } = props;

  const { shoppingCartProducts, setShoppingCartProducts} = useShoppingCart();

  const handlerAddProdctInShoppingCart = () => {
    setShoppingCartProducts([...shoppingCartProducts, data]);
  };

  return (
    <Card sx={{ borderRadius: '20px' }}>
      <CardMedia component="img" height="200" image={data.image} />
      <CardContent>
        <Typography variant="h6" noWrap gutterBottom>
          {data.title}
        </Typography>
        <RatingWrapper>
          <Rating value={data.rating.rate} readOnly />
          <Typography sx={{ marginLeft: 1 }} color="#D4D9E6">
            ({data.rating.count})
          </Typography>
        </RatingWrapper>
        <Typography
          variant="body2"
          paragraph
          sx={{ height: 100, overflowY: 'auto' }}
        >
          {data.description}
        </Typography>
        <Typography variant="caption" color="#D4D9E6">
          Restam 15 unidades no estoque.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="large"
          startIcon={<AddShoppingCartIcon />}
          sx={{ borderRadius: '20px' }}
          onClick={handlerAddProdctInShoppingCart}
        >
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(data.price)}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

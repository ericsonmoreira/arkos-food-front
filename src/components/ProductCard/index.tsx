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

interface ProductCardData {
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

interface ProductCardProps {
  data: ProductCardData;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { data } = props;

  return (
    <Card sx={{ maxWidth: 345, borderRadius: '20px' }}>
      <CardMedia component="img" height="200" image={data.image} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <RatingWrapper>
          <Rating value={data.rating.rate} readOnly />
          <Typography sx={{ marginLeft: 1 }} color="#D4D9E6">
            ({data.rating.count})
          </Typography>
        </RatingWrapper>
        <Typography variant="body2">{data.description}</Typography>
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

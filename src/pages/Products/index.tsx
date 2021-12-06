import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import useProducts from '../../hooks/useProducts';
import { Container, SearchWrapper } from './styles';

const Products: React.FC = () => {
  const { data: products } = useProducts();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <SearchWrapper>
        <TextField variant="outlined" fullWidth size="small" />
        <IconButton color="primary" size="large">
          <SearchOutlinedIcon />
        </IconButton>
      </SearchWrapper>

      <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <ProductCard data={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;

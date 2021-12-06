import { Grid, IconButton, TextField, Typography } from '@mui/material';
import ProductCard from '../../components/ProductCard';

import { Container, SearchWrapper } from './styles';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Products: React.FC = () => {
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ProductCard
            data={{
              title: 'Mens Casual Premium Slim Fit T-Shirts ',
              price: 22.3,
              description:
                'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
              category: '',
              image:
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
              rating: {
                rate: 4.1,
                count: 259
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ProductCard
            data={{
              title: 'Mens Casual Premium Slim Fit T-Shirts ',
              price: 22.3,
              description:
                'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
              category: '',
              image:
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
              rating: {
                rate: 4.1,
                count: 259
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ProductCard
            data={{
              title: 'Mens Casual Premium Slim Fit T-Shirts ',
              price: 22.3,
              description:
                'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
              category: '',
              image:
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
              rating: {
                rate: 4.1,
                count: 259
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ProductCard
            data={{
              title: 'Mens Casual Premium Slim Fit T-Shirts ',
              price: 22.3,
              description:
                'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
              category: '',
              image:
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
              rating: {
                rate: 4.1,
                count: 259
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ProductCard
            data={{
              title: 'Mens Casual Premium Slim Fit T-Shirts ',
              price: 22.3,
              description:
                'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
              category: '',
              image:
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
              rating: {
                rate: 4.1,
                count: 259
              }
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;

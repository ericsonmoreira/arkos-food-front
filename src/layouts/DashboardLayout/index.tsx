import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import routerNames from '../../routes/router.names';
import { Container, Content, Header, Logo, RightWrapper } from './styles';

const DashboardLayout: React.FC = ({ children }) => {
  const history = useHistory();

  const { shoppingCartProducts } = useShoppingCart();

  return (
    <Container>
      <Header>
        <Logo
          src="/static/images/logo.svg"
          onClick={() => history.push(routerNames.PRODUCTS)}
        />
        <RightWrapper>
          <IconButton sx={{marginRight: 2}} onClick={() => history.push(routerNames.SHOPPING_CART)}>
            <Badge badgeContent={shoppingCartProducts.length} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          <Typography>Olá, Ericson</Typography>
        </RightWrapper>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default DashboardLayout;

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import routerNames from '../../routes/router.names';
import { Container, Content, Header, Logo, RightWrapper } from './styles';

const DashboardLayout: React.FC = ({ children }) => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <Logo src="/static/images/logo.svg" />
        <RightWrapper>
          <IconButton onClick={() => history.push(routerNames.SHOPPING_CART)}>
            <AddShoppingCartIcon />
          </IconButton>
          <Typography>Ericson</Typography>
        </RightWrapper>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default DashboardLayout;

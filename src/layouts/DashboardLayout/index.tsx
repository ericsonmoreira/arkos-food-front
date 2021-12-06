import React from 'react';
import { Container, Content, Header, Logo, RightWrapper } from './styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Typography } from '@mui/material';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <Logo src="/static/images/logo.svg" />
        <RightWrapper>
          <IconButton aria-label="delete">
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

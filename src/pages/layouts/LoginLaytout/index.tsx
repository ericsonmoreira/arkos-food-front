import { Hidden } from '@mui/material';
import React from 'react';
import { Container, Content, ImgCover, ImgWrapper, Logo } from './styles';

const LoginLaytout: React.FC = ({ children }) => {
  return (
    <Container>
      <Hidden smDown>
        <ImgWrapper>
          <Logo src="/static/images/logo.svg" />
          <ImgCover alt="cover" src="/static/images/shopping.svg" />
        </ImgWrapper>
      </Hidden>
      <Content>{children}</Content>
    </Container>
  );
};

export default LoginLaytout;

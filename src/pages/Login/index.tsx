import { Typography } from '@mui/material';
import LoginLaytout from '../layouts/LoginLaytout';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <LoginLaytout>
      <Container>
        <Typography>Form aqui</Typography>
      </Container>
    </LoginLaytout>
  );
};

export default Login;

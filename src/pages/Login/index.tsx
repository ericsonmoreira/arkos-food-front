import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import LoginLaytout from '../layouts/LoginLaytout';
import schema from './schema';
import { Container } from './styles';

interface LoginFromData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFromData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: LoginFromData) => {
    console.log(data);
    console.log('onSubmit');
  };

  return (
    <LoginLaytout>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Senha"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Entrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </LoginLaytout>
  );
};

export default Login;

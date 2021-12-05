import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import LoginLaytout from '../layouts/LoginLaytout';
import schema from './schema';
import { Container } from './styles';

interface LoginFromData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm<LoginFromData>({
    defaultValues: {
      email: 'moreira.ericson@gmail.com',
      password: 'senha'
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: LoginFromData) => {
    try {
      setLoading(true);
      await signIn({
        username: data.email,
        password: data.password
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
                render={({ field, fieldState: { invalid, error } }) => (
                  <TextField
                    {...field}
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState: { invalid, error } }) => (
                  <TextField
                    {...field}
                    label="Senha"
                    variant="outlined"
                    fullWidth
                    type="password"
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" disabled={loading}>
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

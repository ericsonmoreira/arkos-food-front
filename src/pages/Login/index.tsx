import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import TextFieldController from '../../components/TextFieldController';
import { useAuth } from '../../context/AuthContext';
import schema from './schema';
import { Container } from './styles';
import routerNames from '../../routes/router.names';
interface LoginFromData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

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

      history.push(routerNames.PRODUCTS);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextFieldController name="email" control={control} />
          </Grid>
          <Grid item xs={12}>
            <TextFieldController
              name="password"
              control={control}
              type="password"
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
  );
};

export default Login;

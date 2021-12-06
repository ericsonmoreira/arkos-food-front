import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import TextFieldController from '../../components/TextFieldController';
import schema from './schema';
import { Container } from './styles';
import routerNames from '../../routes/router.names';

interface EditPerfilDormData {
  name: string;
  email: string;
  emailConfirm: string;
}

const EditPerfil: React.FC = () => {
  const history = useHistory();

  const { handleSubmit, control } = useForm<EditPerfilDormData>({
    defaultValues: {
      name: '',
      email: '',
      emailConfirm: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: EditPerfilDormData) => {
    console.log(data);
    history.push(routerNames.PRODUCTS);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextFieldController
              name="name"
              label="Nome Completo"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldController name="email" label="Email" control={control} />
          </Grid>
          <Grid item xs={12}>
            <TextFieldController
              name="emailConfirm"
              label="Confirmar Email"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained">
              Alterar Dados
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditPerfil;

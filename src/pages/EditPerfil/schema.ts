import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('Email inválido'),
  emailConfirm: yup
    .string()
    .required('Campo obrigatório')
    .email('Email inválido').oneOf([yup.ref('email'), null], 'Emails diferentes')
});

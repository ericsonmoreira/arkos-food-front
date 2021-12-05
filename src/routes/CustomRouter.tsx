import { Route, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export interface CustomRouterProps extends RouteProps {
  isPrivate?: boolean;
}

const CustomRouter: React.FC<CustomRouterProps> = (props) => {
  const { isPrivate, ...rest } = props;

  const { userLogged } = useAuth();

  // Para o caso da rota não ser privada
  if (!isPrivate) return <Route {...rest} />;

  // Caso o usuário não esteja logado
  if (!userLogged()) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default CustomRouter;

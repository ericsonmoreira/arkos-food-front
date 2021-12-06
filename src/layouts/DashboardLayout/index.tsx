import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  Badge,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem
} from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import routerNames from '../../routes/router.names';
import { Container, Content, Header, Logo, RightWrapper } from './styles';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const DashboardLayout: React.FC = ({ children }) => {
  const history = useHistory();

  const { signOut } = useAuth();

  const { shoppingCartProducts } = useShoppingCart();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditPerfil = () => {
    history.push(routerNames.EDIT_PERFIL);
  };

  const handleLogout = () => {
    signOut();
    history.push(routerNames.LOGIN);
  };

  return (
    <Container>
      <Header>
        <Logo
          src="/static/images/logo.svg"
          onClick={() => history.push(routerNames.PRODUCTS)}
        />
        <RightWrapper>
          <IconButton
            sx={{ marginRight: 2 }}
            onClick={() => history.push(routerNames.SHOPPING_CART)}
          >
            <Badge badgeContent={shoppingCartProducts.length} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>

          <Button
            id="basic-button"
            variant="text"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Olá, Ericson
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
          >
            <MenuItem onClick={handleEditPerfil}>
              <ListItemIcon>
                <PersonOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Editar Perfil</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>SAIR</ListItemText>
            </MenuItem>
          </Menu>
        </RightWrapper>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default DashboardLayout;

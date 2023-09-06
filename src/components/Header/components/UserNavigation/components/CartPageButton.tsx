import { NavLink, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import { PathNames } from 'types';

const CartPageButton = () => {
  const { pathname } = useLocation();

  return (
    <IconButton
      component={NavLink}
      disabled={pathname === PathNames.cart}
      to={PathNames.cart}
      sx={useIconButtonColorTheme('103, 58, 183')}
      size="large"
    >
      <ShoppingCartIcon sx={{ fontSize: '1.8rem' }} />
    </IconButton>
  );
};

export default CartPageButton;

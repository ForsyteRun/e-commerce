import { NavLink, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import { PathNames } from 'types';
import Badge from '@mui/material/Badge';
import { useAppSelector } from 'hooks/useRedux';

const CartPageButton = () => {
  const { pathname } = useLocation();
  const { data } = useAppSelector((state) => state.cartSlice);

  const badgeItemCount = data?.lineItems.length;

  return (
    <IconButton
      component={NavLink}
      disabled={pathname === PathNames.cart}
      to={PathNames.cart}
      sx={useIconButtonColorTheme('103, 58, 183')}
      size="large"
    >
      <Badge badgeContent={badgeItemCount} color="primary">
        <ShoppingCartIcon sx={{ fontSize: '1.8rem' }} />
      </Badge>
    </IconButton>
  );
};

export default CartPageButton;

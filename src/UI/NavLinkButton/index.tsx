import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { NavLinkButtonProps } from 'types';
import navButtonStyles from './navButtonStyles';

const NavLinkButton = ({ children, path }: NavLinkButtonProps): JSX.Element => {
  const userData = useAppSelector((state) => state.userDataSlice);
  const { pathname } = useLocation();

  const isPending = userData.loading === 'pending';
  const userType = userData.data.type;
  const isNotUserOrPending = !userType || isPending;

  return (
    <Button
      component={NavLink}
      disabled={isNotUserOrPending || pathname === path}
      sx={navButtonStyles}
      to={path}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default NavLinkButton;

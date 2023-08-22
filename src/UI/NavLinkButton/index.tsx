import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { NavLinkButtonProps, PathNames } from 'types';
import navButtonStyles from './navButtonStyles';

const NavLinkButton = ({ children, path }: NavLinkButtonProps): JSX.Element => {
  const userData = useAppSelector((state) => state.userDataSlice);
  const { pathname } = useLocation();

  const { register, login } = PathNames;
  const isLoginOrRegisterPage = path === login || path === register;
  const isPending = userData.loading === 'pending';
  const { authenticationMode } = userData.data;
  const isNotUserOrPending = !authenticationMode || isPending;
  const isDisabled =
    (isNotUserOrPending || pathname === path) && isLoginOrRegisterPage;

  return (
    <Button
      component={NavLink}
      disabled={isDisabled}
      sx={navButtonStyles}
      to={path}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default NavLinkButton;

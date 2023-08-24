import { Button } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { NavLinkButtonProps } from 'types';
import navButtonStyles from './navButtonStyles';

const NavigationButton = ({
  children,
  path,
}: NavLinkButtonProps): JSX.Element => {
  const { pathname } = useLocation();
  const isCatalogPage = pathname === path;

  return (
    <Button
      component={NavLink}
      disabled={isCatalogPage}
      sx={navButtonStyles}
      to={path}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default NavigationButton;

import { Button } from '@mui/material';
import { NavLink, useMatch } from 'react-router-dom';
import { NavLinkButtonProps } from 'types';
import navButtonStyles from './navButtonStyles';

const NavigationButton = ({
  children,
  path,
}: NavLinkButtonProps): JSX.Element => {
  const match = useMatch({
    path,
    end: path.length === 1,
  });

  return (
    <Button
      component={NavLink}
      disabled={!!match}
      sx={navButtonStyles}
      to={path}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default NavigationButton;

import { Button } from '@mui/material';
import { NavLink, useMatch } from 'react-router-dom';
import { NavLinkButtonProps } from 'types';
import { useUpdateBurgerContext } from 'context/BurgerContext';
import navButtonStyles from './navButtonStyles';

const NavigationButton = ({
  children,
  path,
}: NavLinkButtonProps): JSX.Element => {
  const match = useMatch({
    path,
    end: path.length === 1,
  });
  const changeModalStatus = useUpdateBurgerContext();

  return (
    <Button
      component={NavLink}
      disabled={!!match}
      onClick={() => changeModalStatus(false)}
      sx={navButtonStyles}
      to={path}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default NavigationButton;

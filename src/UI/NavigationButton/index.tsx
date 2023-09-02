import { Button } from '@mui/material';
import { NavLink, useMatch } from 'react-router-dom';
import { NavLinkButtonProps } from 'types';
import { useUpdateModalContext } from 'context/ModalContext';
import navButtonStyles from './navButtonStyles';

const NavigationButton = ({
  children,
  path,
}: NavLinkButtonProps): JSX.Element => {
  const match = useMatch({
    path,
    end: path.length === 1,
  });
  const { changeBurgerModalStatus } = useUpdateModalContext();

  return (
    <Button
      component={NavLink}
      disabled={!!match}
      onClick={() => changeBurgerModalStatus(false)}
      sx={navButtonStyles}
      to={path}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default NavigationButton;

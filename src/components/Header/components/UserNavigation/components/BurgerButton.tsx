import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import useIconButtonColorTheme from './helpers/useIconButtonColorTheme';

const BurgerButton = () => {
  return (
    <IconButton
      color="primary"
      sx={useIconButtonColorTheme('25, 118, 210')}
      size="large"
    >
      <MenuRoundedIcon />
    </IconButton>
  );
};

export default BurgerButton;

import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useUpdateBurgerContext } from 'context/BurgerContext';
import useIconButtonColorTheme from './helpers/useIconButtonColorTheme';

const BurgerButton = () => {
  const changeModalStatus = useUpdateBurgerContext();

  return (
    <IconButton
      color="primary"
      onClick={() => changeModalStatus()}
      size="large"
      sx={useIconButtonColorTheme('25, 118, 210')}
    >
      <MenuRoundedIcon />
    </IconButton>
  );
};

export default BurgerButton;

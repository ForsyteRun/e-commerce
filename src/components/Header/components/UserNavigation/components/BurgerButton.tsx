import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useModalContext, useUpdateModalContext } from 'context/ModalContext';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import styles from '../UserNavigation.module.scss';

const BurgerButton = () => {
  const { changeBurgerModalStatus } = useUpdateModalContext();
  const { isBurgerOpen } = useModalContext();

  return (
    <IconButton
      color="primary"
      onClick={() => changeBurgerModalStatus(!isBurgerOpen)}
      size="large"
      sx={useIconButtonColorTheme('25, 118, 210')}
      className={isBurgerOpen ? styles.opened : ''}
    >
      <MenuRoundedIcon />
    </IconButton>
  );
};

export default BurgerButton;

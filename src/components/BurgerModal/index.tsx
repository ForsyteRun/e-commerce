import { Box, Modal } from '@mui/material';
import AppNavigation from 'components/Header/components/AppNavigation';
import {
  useBurgerContext,
  useUpdateBurgerContext,
} from 'context/BurgerContext';
import { modal, modalBox } from './BurgerModal.styles';

const BurgerModal = () => {
  const isOpen = useBurgerContext();
  const changeModalStatus = useUpdateBurgerContext();

  return (
    <Modal open={isOpen} onClose={() => changeModalStatus(false)} sx={modal}>
      <Box sx={modalBox}>
        <AppNavigation />
      </Box>
    </Modal>
  );
};

export default BurgerModal;

import { Box, Modal } from '@mui/material';
import AppNavigation from 'components/Header/components/AppNavigation';
import { modal, modalBox } from './BurgerModal.styles';

const BurgerModal = () => {
  const isOpen = true;

  return (
    <Modal open={isOpen} sx={modal}>
      <Box sx={modalBox}>
        <AppNavigation />
      </Box>
    </Modal>
  );
};

export default BurgerModal;

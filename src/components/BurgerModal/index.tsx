import { Box, Modal } from '@mui/material';
import AppNavigation from 'components/Header/components/AppNavigation';
import { useModalContext, useUpdateModalContext } from 'context/ModalContext';
import { modal, modalBox } from './BurgerModal.styles';

const BurgerModal = () => {
  const { isBurgerOpen } = useModalContext();
  const { changeBurgerModalStatus } = useUpdateModalContext();

  return (
    <Modal
      open={isBurgerOpen}
      onClose={() => changeBurgerModalStatus(false)}
      sx={modal}
    >
      <Box sx={modalBox}>
        <AppNavigation />
      </Box>
    </Modal>
  );
};

export default BurgerModal;

import { Modal, Box, Typography } from '@mui/material';
import { CartClearModalProps } from 'modules/Cart/types';
import container from './container';
import ModalButtons from './ModalButtons';

const CartClearModal = ({ open, onClose }: CartClearModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={container}>
        <Typography sx={{ textAlign: 'center' }}>
          Do you really want to clear the cart?
        </Typography>
        <ModalButtons onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default CartClearModal;

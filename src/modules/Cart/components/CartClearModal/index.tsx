import { Modal, Box, Typography, Button } from '@mui/material';
import { CartClearModalProps } from 'modules/Cart/types';
import { useAppSelector } from 'hooks/useRedux';
import { container, buttonYes, buttonNo } from './modalStyles';
import styles from './CartClearModal.module.scss';
import clearCart from './clearCart';

const CartClearModal = ({ open, onClose }: CartClearModalProps) => {
  const { loading } = useAppSelector((state) => state.cartSlice);
  const isDisabled = loading !== 'succeeded' && loading !== 'failed';

  const onConfirm = async () => {
    await clearCart();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={container}>
        <Typography sx={{ textAlign: 'center' }}>
          Do you really want to clear the cart?
        </Typography>
        <div className={styles.buttons_wrapper}>
          <Button
            disabled={isDisabled}
            variant="text"
            onClick={onConfirm}
            sx={buttonYes}
          >
            Yes
          </Button>
          <Button
            disabled={isDisabled}
            variant="text"
            onClick={onClose}
            sx={buttonNo}
          >
            No
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CartClearModal;

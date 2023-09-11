import { Button } from '@mui/material';
import { ICartActionButtonProps } from './types';

const CartActionButton = ({
  id,
  children,
  callback,
  disabled,
  sx,
}: ICartActionButtonProps) => {
  return (
    <Button
      onClick={() => callback(id)}
      disabled={disabled}
      variant="contained"
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CartActionButton;

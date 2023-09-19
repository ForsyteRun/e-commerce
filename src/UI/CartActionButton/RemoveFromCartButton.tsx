import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { removeFromCartHandler } from 'helpers';
import CartActionButton from './CartActionButton';
import { RemoveFromCartButtonProps } from './types';
import { removeFromCartStyles } from './buttonStyles';

const RemoveFromCartButton = ({ id }: RemoveFromCartButtonProps) => {
  return (
    <CartActionButton
      id={id}
      callback={removeFromCartHandler}
      sx={removeFromCartStyles}
    >
      <>
        <DeleteForeverOutlinedIcon sx={{ mr: '0.5rem' }} />
        Remove from cart
      </>
    </CartActionButton>
  );
};

export default RemoveFromCartButton;

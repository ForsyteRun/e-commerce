import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { addToCartHandler } from 'helpers';
import CartActionButton from './CartActionButton';
import { AddToCartButtonProps } from './types';
import { addToCartStyles } from './buttonStyles';

const AddToCartButton = ({ id, disabled }: AddToCartButtonProps) => {
  return (
    <CartActionButton
      id={id}
      callback={addToCartHandler}
      sx={addToCartStyles}
      disabled={disabled}
    >
      <>
        <AddShoppingCartRoundedIcon sx={{ mr: '0.5rem' }} />
        Add to cart
      </>
    </CartActionButton>
  );
};

export default AddToCartButton;

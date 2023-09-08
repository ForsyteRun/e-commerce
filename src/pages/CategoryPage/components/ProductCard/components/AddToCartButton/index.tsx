import { Button } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useAppSelector } from 'hooks/useRedux';
import { addToCartHandler } from 'helpers';
import buttonStyles from './buttonStyles';

const AddToCartButton = ({ productId }: { productId: string }) => {
  const { data } = useAppSelector((state) => state.cartSlice);
  const isInCart = !!data?.lineItems.find(
    (item) => item.productId === productId
  );

  return (
    <Button
      aria-label="add-to-cart-button"
      disabled={isInCart}
      onClick={() => addToCartHandler(productId)}
      sx={buttonStyles}
      variant="outlined"
    >
      <AddShoppingCartRoundedIcon sx={{ mr: '0.5rem' }} />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;

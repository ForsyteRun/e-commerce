import { Button } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { addToCartHandler } from 'helpers';
import buttonStyles from './buttonStyles';

const AddToCartButton = () => {
  const { id } = useAppSelector((state) => state.singleProductDataSlice.data!);
  const { data } = useAppSelector((state) => state.cartSlice);
  const isInCart = !!data?.lineItems.find((item) => item.productId === id);

  return (
    <Button
      disabled={isInCart}
      onClick={() => addToCartHandler(id)}
      variant="contained"
      sx={buttonStyles}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;

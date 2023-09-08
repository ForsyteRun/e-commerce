import { Button } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { MyCartAddLineItemAction } from '@commercetools/platform-sdk';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import updateCart from 'store/cartSlice/updateCart';
import buttonStyles from './buttonStyles';

const AddToCartButton = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();
  const { lineItems } = useAppSelector((state) => state.cartSlice.data!);
  const isInCart = !!lineItems.find((item) => item.productId === productId);

  const onClickHandler = () => {
    const action: MyCartAddLineItemAction = {
      action: 'addLineItem',
      productId,
    };
    dispatch(updateCart(action));
  };

  return (
    <Button
      aria-label="add-to-cart-button"
      disabled={isInCart}
      onClick={onClickHandler}
      sx={buttonStyles}
      variant="outlined"
    >
      <AddShoppingCartRoundedIcon sx={{ mr: '0.5rem' }} />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;

import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { MyCartChangeLineItemQuantityAction } from '@commercetools/platform-sdk';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { updateCart } from 'store/cartSlice/thunks';
import showSnackbarMessage from 'helpers/showSnackbarMessage';
import { ItemCounterProps } from './types';
import styles from './ItemCounter.module.scss';
import ItemPrice from '../ItemPrice';
import buttonStyles from './buttonStyles';
import { changeCount, handleChange } from './helpers';

const ItemCounter = ({ quantity, id, price }: ItemCounterProps) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.cartSlice);
  const [count, setCount] = useState<string>(`${quantity}`);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(loading === 'pending');

    if (loading === 'failed') {
      setCount(`${quantity}`);
      showSnackbarMessage({
        status: 'error',
        message: 'Failed to change product quantity. Please try again',
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (+count !== quantity) {
      const debounce = setTimeout(() => {
        const action: MyCartChangeLineItemQuantityAction = {
          action: 'changeLineItemQuantity',
          lineItemId: id,
          quantity: +count ? +count : 1,
        };
        dispatch(updateCart(action));
      }, 300);
      return () => clearTimeout(debounce);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, quantity]);

  return (
    <div className={styles.container}>
      <Button
        disabled={isDisabled}
        onClick={() => changeCount('dec', count, setCount)}
        sx={buttonStyles}
      >
        –
      </Button>
      <input
        className={styles.count_input}
        disabled={isDisabled}
        onChange={(e) => handleChange(e, setCount)}
        onFocus={(e) => e.target.select()}
        type="text"
        value={count}
      />
      <Button
        disabled={isDisabled}
        onClick={() => changeCount('inc', count, setCount)}
        sx={buttonStyles}
      >
        +
      </Button>
      <ItemPrice price={price} quantity={quantity} />
    </div>
  );
};

export default ItemCounter;

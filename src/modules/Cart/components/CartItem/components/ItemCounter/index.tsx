import { useState, useEffect } from 'react';
import { Button, SxProps } from '@mui/material';
import {
  MyCartChangeLineItemQuantityAction,
  Price,
} from '@commercetools/platform-sdk';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { updateCart } from 'store/cartSlice/thunks';
import { showSnackbar } from 'store/snackbarSlice';
import styles from './ItemCounter.module.scss';
import ItemPrice from '../ItemPrice';

interface ItemCounterProps {
  price: Price;
  quantity: number;
  id: string;
}

const ItemCounter = ({ quantity, id, price }: ItemCounterProps) => {
  const buttonStyles: SxProps = {
    width: '24px',
    height: '24px',
    minWidth: 0,
  };

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.cartSlice);
  const [count, setCount] = useState<string>(`${quantity}`);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(loading === 'pending');

    if (loading === 'failed') {
      setCount(`${quantity}`);
      dispatch(
        showSnackbar({
          status: 'error',
          message: 'Failed to change product quantity. Please try again',
        })
      );
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!Number.isNaN(+value) && +value > 0) {
      setCount(value);
    }
  };

  const inc = () => {
    const newValue = `${+count + 1}`;
    setCount(newValue);
  };

  const dec = () => {
    const newValue = +count - 1;
    if (newValue >= 0) {
      setCount(`${newValue}`);
    }
  };

  return (
    <div className={styles.container}>
      <Button disabled={isDisabled} onClick={dec} sx={buttonStyles}>
        -
      </Button>
      <input
        className={styles.count_input}
        disabled={isDisabled}
        onChange={handleChange}
        onFocus={(e) => e.target.select()}
        type="text"
        value={count}
      />
      <Button disabled={isDisabled} onClick={inc} sx={buttonStyles}>
        +
      </Button>
      <ItemPrice price={price} quantity={quantity} />
    </div>
  );
};

export default ItemCounter;

import { Button, Divider, Paper } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { useEffect, useState } from 'react';
import { DiscountField, PriceItem } from './components';
import getCommonPrice from './helpers/getCommonPrice';

const PriceBlock = () => {
  const { data } = useAppSelector((state) => state.cartSlice);

  const [summeryDiscountPrice, setSummeryDiscountPrice] = useState(0);
  const [summeryPrice, setSummeryPrice] = useState(0);

  useEffect(() => {
    if (data) {
      const commonPrice = getCommonPrice(data);

      const withDiscount = commonPrice.reduce(
        (acc, item) => acc + item.discountPrice,
        0
      );

      const withOutDiscount = commonPrice.reduce(
        (acc, item) => acc + item.price,
        0
      );

      setSummeryPrice(withOutDiscount);
      setSummeryDiscountPrice(withDiscount);
    }
  }, [data]);

  return (
    <Paper sx={{ p: '1rem 1.5rem', flexBasis: '30%', height: 'fit-content' }}>
      <PriceItem title="sum" price={summeryPrice} />
      <PriceItem title="discount" discount={summeryDiscountPrice} />
      <Divider sx={{ mb: '1rem' }} />
      <PriceItem
        title="order price"
        price={summeryPrice - summeryDiscountPrice}
      />
      <DiscountField />
      <Button variant="contained" fullWidth>
        submit order
      </Button>
    </Paper>
  );
};

export default PriceBlock;

import { Button, Divider, Paper } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { useEffect, useState } from 'react';
import { DiscountField, PriceItem } from './components';
import getCommonPrice from './helpers/getCommonPrice';
import getSumSeparatePrice from './helpers/getSumSeparatePrice';

const PriceBlock = () => {
  const { data } = useAppSelector((state) => state.cartSlice);

  const [summeryDiscountPrice, setSummeryDiscountPrice] = useState(0);
  const [summeryPrice, setSummeryPrice] = useState(0);

  useEffect(() => {
    if (data) {
      const commonPrice = getCommonPrice(data);

      const withDiscount = getSumSeparatePrice(commonPrice, 'discountPrice');
      const withOutDiscount = getSumSeparatePrice(commonPrice, 'price');

      setSummeryPrice(withOutDiscount);
      setSummeryDiscountPrice(withDiscount);
    }
  }, [data]);

  return (
    <Paper sx={{ p: '1rem 1.5rem', flexBasis: '30%', height: 'fit-content' }}>
      <PriceItem
        title="sum"
        price={summeryPrice}
        isDiscounted={summeryDiscountPrice > 0}
      />
      <PriceItem
        title="discount"
        discount={summeryDiscountPrice}
        isDiscounted={summeryDiscountPrice > 0}
      />
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

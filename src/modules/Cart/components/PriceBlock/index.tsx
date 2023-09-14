import { Button, Divider, Paper } from '@mui/material';
import { FC } from 'react';
import { DiscountField, PriceItem } from './components';

const PriceBlock: FC<{ totalPrice: number }> = ({ totalPrice }) => {
  return (
    <Paper sx={{ p: '1rem 1.5rem', flexBasis: '30%', height: 'fit-content' }}>
      <PriceItem title="sum" price={totalPrice} />
      <PriceItem title="address" address="Tokio" />
      <Divider sx={{ mb: '1rem' }} />
      <PriceItem title="order price" price={totalPrice} />
      <DiscountField />
      <Button variant="contained" fullWidth>
        submit order
      </Button>
    </Paper>
  );
};

export default PriceBlock;

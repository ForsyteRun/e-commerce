import { Button, Divider, Paper } from '@mui/material';
import PriceItem from './components/PriceItem';

interface IPriceBlock {
  totalPrice: number;
}

const PriceBlock = ({ totalPrice }: IPriceBlock) => {
  return (
    <Paper sx={{ p: '1rem 1.5rem', flexBasis: '30%' }}>
      <PriceItem title="sum" price={totalPrice} />
      <PriceItem title="address" address="Tokio" />
      <Divider sx={{ mb: '1rem' }} />
      <PriceItem title="order price" price={totalPrice} />
      <Button variant="contained" fullWidth>
        submit order
      </Button>
    </Paper>
  );
};

export default PriceBlock;

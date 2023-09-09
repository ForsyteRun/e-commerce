import { Button, Divider, Paper } from '@mui/material';
import PriceItem from './components/PriceItem';

const PriceBlock = () => {
  return (
    <Paper sx={{ p: '1rem 1.5rem', flexBasis: '30%' }}>
      <PriceItem title="sum" price={11} />
      <PriceItem title="address" address="Tokio" />
      <Divider sx={{ mb: '1rem' }} />
      <PriceItem title="order price" price={1212} />
      <Button variant="contained" fullWidth>
        submit order
      </Button>
    </Paper>
  );
};

export default PriceBlock;

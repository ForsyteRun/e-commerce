import { Button, Divider, Paper, Stack, Typography } from '@mui/material';
import PriceItem from './components/PriceItem';

const PriceBlock = () => {
  return (
    <Paper sx={{ p: '1rem 1.5rem', flexBasis: '30%' }}>
      <PriceItem price={11} />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ mb: '1rem' }}
      >
        <Typography variant="h6">delivery</Typography>
        <Typography variant="h6">Tokio</Typography>
      </Stack>
      <Divider sx={{ mb: '1rem' }} />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ mb: '1rem' }}
      >
        <Typography variant="h6" fontWeight="700">
          order price
        </Typography>
        <Typography variant="h6" fontWeight="700">
          1212
        </Typography>
      </Stack>
      <Button variant="contained" fullWidth>
        submit order
      </Button>
    </Paper>
  );
};

export default PriceBlock;

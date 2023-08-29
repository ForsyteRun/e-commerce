import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Typography, Stack } from '@mui/material';

const DefaultAddress = () => {
  return (
    <Stack flexDirection="row" alignItems="center" gap="0.5rem">
      <LocalShippingIcon color="primary" />
      <Typography variant="h6" color="primary">
        default address
      </Typography>
    </Stack>
  );
};

export default DefaultAddress;

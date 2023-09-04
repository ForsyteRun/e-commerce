import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Typography, Stack } from '@mui/material';
import { FC } from 'react';

interface IDefaultAddress {
  title: string;
}

const DefaultAddress: FC<IDefaultAddress> = ({ title }) => {
  return (
    <Stack flexDirection="row" alignItems="center" gap="0.5rem">
      <LocalShippingIcon color="primary" />
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
    </Stack>
  );
};

export default DefaultAddress;

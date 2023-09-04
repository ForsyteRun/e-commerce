import {
  LocalShipping as LocalShippingIcon,
  AccountBalanceWallet,
} from '@mui/icons-material';
import { Typography, Stack } from '@mui/material';
import { FC } from 'react';

interface IDefaultAddress {
  title: string;
  shipping: boolean;
}

const DefaultAddress: FC<IDefaultAddress> = ({ title, shipping }) => {
  return (
    <Stack flexDirection="row" alignItems="center" gap="0.5rem">
      {shipping ? (
        <LocalShippingIcon color="primary" />
      ) : (
        <AccountBalanceWallet color="secondary" />
      )}
      <Typography variant="h6" color={shipping ? 'primary' : 'secondary'}>
        {title}
      </Typography>
    </Stack>
  );
};

export default DefaultAddress;

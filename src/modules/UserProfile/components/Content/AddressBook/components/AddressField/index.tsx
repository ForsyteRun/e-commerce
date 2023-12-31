import React from 'react';
import { Typography, Stack } from '@mui/material';

interface IAddressField {
  title: string;
  value: string;
}

const AddressField: React.FC<IAddressField> = ({ title, value }) => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6" sx={{ mb: '1rem' }}>
        {value}
      </Typography>
    </Stack>
  );
};

export default AddressField;

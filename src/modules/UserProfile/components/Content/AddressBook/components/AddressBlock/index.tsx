import React from 'react';
import { Typography, Stack } from '@mui/material';
import AddressField from '../AddressField';
import { IAddressBlock } from '../../types';
import DefaultAddress from '../DefaultAddress';

const AddressBlock: React.FC<IAddressBlock> = ({
  title,
  address,
  defaultAddress,
}) => {
  const filteredAddress = Object.entries(address).filter(
    ([key]) => key !== 'id'
  );

  return (
    <>
      <Typography
        variant="h6"
        sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <Stack>
        {filteredAddress.map(([key, value]: [string, string]) => (
          <AddressField key={key} title={key} value={value} />
        ))}
        {defaultAddress && <DefaultAddress />}
      </Stack>
    </>
  );
};

export default AddressBlock;

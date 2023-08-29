import React from 'react';
import { Typography, Stack } from '@mui/material';
import { BaseAddress } from '@commercetools/platform-sdk';
import AddressField from '../AddressField';
import { AddressTypesEnum } from '../../types';

interface IAddressBlock {
  title: AddressTypesEnum;
  address: BaseAddress;
}

const AddressBlock: React.FC<IAddressBlock> = ({ title, address }) => {
  const filteredAddress = Object.entries(address).filter(
    ([key]) => key !== 'id'
  );

  return (
    <>
      <Typography variant="h6" sx={{ mb: '1rem' }}>
        {title}
      </Typography>
      <Stack>
        {filteredAddress.map(([key, value]: [string, string]) => (
          <AddressField key={key} title={key} value={value} />
        ))}
      </Stack>
    </>
  );
};

export default AddressBlock;

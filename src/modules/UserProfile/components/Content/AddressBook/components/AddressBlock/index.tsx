/* eslint-disable no-console */
import React, { useState } from 'react';
import { Typography, Stack, Button } from '@mui/material';
import AddressField from '../AddressField';
import { IAddressBlock } from '../../types';
import DefaultAddress from '../DefaultAddress';

const AddressBlock: React.FC<IAddressBlock> = ({
  title,
  address,
  index,
  defaultAddress,
}) => {
  const [billing, setBilling] = useState(false);

  console.log(billing, index);

  const filteredAddress = Object.entries(address).filter(
    ([key]) => key !== 'id'
  );

  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography
          color="#999"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography
          color="#999"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          billing
        </Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        {filteredAddress.map(([key, value]: [string, string]) => (
          <AddressField key={key} title={key} value={value} />
        ))}
      </Stack>
      {defaultAddress && <DefaultAddress />}
      <Stack flexDirection="row">
        <Button>set as shipping</Button>
        <Button onClick={() => setBilling(!billing)}>set as billing</Button>
        <Button>set as default</Button>
      </Stack>
    </>
  );
};

export default AddressBlock;

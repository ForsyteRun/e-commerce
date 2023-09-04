import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import { IAddressBlock } from '../../types';
import AddressField from '../AddressField';
import DefaultAddress from '../DefaultAddress';

const AddressBlock: React.FC<IAddressBlock> = ({
  title,
  address,
  defaultAddress,
  billing,
  indexModify,
  setIndexModify,
  setBilling,
}) => {
  const { addresses, billingAddressIds } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const isBilling = billingAddressIds?.some(
    (item) => item === addresses[indexModify as number].id
  );

  const filteredAddress = Object.entries(address).filter(
    ([key]) => key !== 'id'
  );

  const handleModify = () => {
    setIndexModify(indexModify);
    setBilling(!billing);
  };

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
          color="blue"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          {isBilling ? <div>Billing</div> : ''}
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
        <Button onClick={handleModify}>
          {isBilling ? 'remove from billing' : 'set as billing'}
        </Button>
        <Button>set as default</Button>
      </Stack>
    </>
  );
};

export default AddressBlock;

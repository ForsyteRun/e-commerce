/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import React, { useEffect, useRef, useState } from 'react';
import addAddress from 'store/userDataSlice/thunks/addAddress';
import { RegisteredUserData } from 'types';
import { Address, MyCustomerUpdate } from '@commercetools/platform-sdk';
import { IAddressBlock } from '../../types';
import AddressField from '../AddressField';
import DefaultAddress from '../DefaultAddress';

const AddressBlock: React.FC<IAddressBlock> = ({
  title,
  defaultAddress,
  cardIndex,
  allAddress,
}) => {
  const dispatch = useAppDispatch();
  const { addresses, billingAddressIds, version } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const isBilling = billingAddressIds?.some(
    (item) => item === addresses[cardIndex].id
  );

  const [billing, setBilling] = useState(isBilling);

  const addressWithoutId = { ...allAddress };
  delete addressWithoutId.id;

  const handleModify = () => {
    setBilling(!billing);
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (addresses) {
      const setBillingItems = addresses.filter(
        (address: Address, index: number) => index === cardIndex && address
      );

      if (billing && setBillingItems.length > 0) {
        const data: MyCustomerUpdate = {
          version,
          actions: [
            {
              action: 'addBillingAddressId',
              addressId: setBillingItems[0].id,
            },
          ],
        };

        dispatch(addAddress(data));
      } else if (!billing && setBillingItems.length > 0) {
        const data: MyCustomerUpdate = {
          version,
          actions: [
            {
              action: 'removeBillingAddressId',
              addressId: setBillingItems[0].id,
            },
          ],
        };

        dispatch(addAddress(data));
      }
    }
  }, [billing]);

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
        {Object.entries(addressWithoutId).map(([key, value]) => (
          <AddressField title={key} value={value} key={key} />
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

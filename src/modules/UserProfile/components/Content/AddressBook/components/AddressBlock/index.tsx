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
  cardIndex,
  allAddress,
  defaultShippingAddress,
  setDefaultShippingAddress,
  setCardId,
}) => {
  const dispatch = useAppDispatch();
  const {
    addresses,
    billingAddressIds,
    shippingAddressIds,
    defaultShippingAddressId,
    version,
  } = useAppSelector((state) => state.userDataSlice.data) as RegisteredUserData;

  const handleDefaultAddress = () => {
    setDefaultShippingAddress(!defaultShippingAddress);
    setCardId(cardIndex);
  };

  const isBilling = billingAddressIds?.some(
    (item) => item === addresses[cardIndex].id
  );

  const isShipping = shippingAddressIds?.some(
    (item) => item === addresses[cardIndex].id
  );

  const isDefaultShipping =
    addresses[cardIndex].id === defaultShippingAddressId;

  const [billing, setBilling] = useState(isBilling);
  const [shipping, setShipping] = useState(isShipping);

  const addressWithoutId = { ...allAddress };
  delete addressWithoutId.id;

  const firsBillingRender = useRef(true);
  const firstShippingRender = useRef(true);

  useEffect(() => {
    if (firsBillingRender.current) {
      firsBillingRender.current = false;
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

  useEffect(() => {
    if (firstShippingRender.current) {
      firstShippingRender.current = false;
    } else if (addresses) {
      const setShippingItems = addresses.filter(
        (address: Address, index: number) => index === cardIndex && address
      );

      if (shipping && setShippingItems.length > 0) {
        const data: MyCustomerUpdate = {
          version,
          actions: [
            {
              action: 'addShippingAddressId',
              addressId: setShippingItems[0].id,
            },
          ],
        };

        dispatch(addAddress(data));
      } else if (!shipping && setShippingItems.length > 0) {
        const data: MyCustomerUpdate = {
          version,
          actions: [
            {
              action: 'removeShippingAddressId',
              addressId: setShippingItems[0].id,
            },
          ],
        };

        dispatch(addAddress(data));
      }
    }
  }, [shipping]);

  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography
          color="#999"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          {isShipping ? <div>Shipping</div> : ''}
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
      {isDefaultShipping && <DefaultAddress title="default shipping address" />}
      <Stack flexDirection="row">
        <Button onClick={() => setShipping(!shipping)}>
          {isShipping ? 'remove from shipping' : 'set as shipping'}
        </Button>
        <Button onClick={() => setBilling(!billing)}>
          {isBilling ? 'remove from billing' : 'set as billing'}
        </Button>
        <Button onClick={handleDefaultAddress}>
          {isDefaultShipping ? '' : 'set as default shipping'}
        </Button>
      </Stack>
    </>
  );
};

export default AddressBlock;

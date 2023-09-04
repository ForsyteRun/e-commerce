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
  defaultBillingAddress,
  setDefaultShippingAddress,
  setDefaultBillingAddress,
  setCardId,
}) => {
  const dispatch = useAppDispatch();
  const {
    addresses,
    billingAddressIds,
    shippingAddressIds,
    defaultShippingAddressId,
    defaultBillingAddressId,
    version,
  } = useAppSelector((state) => state.userDataSlice.data) as RegisteredUserData;

  const handleDefaultShippingAddress = () => {
    setDefaultShippingAddress(!defaultShippingAddress);
    setCardId(cardIndex);
  };

  const handleDefaultBillingAddress = () => {
    setDefaultBillingAddress(!defaultBillingAddress);
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

  const isDefaultBilling = addresses[cardIndex].id === defaultBillingAddressId;

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
          color="primary"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          {isShipping ? 'Shipping' : ''}
        </Typography>
        <Typography
          color="secondary"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          {isBilling ? 'Billing' : ''}
        </Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        {Object.entries(addressWithoutId).map(([key, value]) => (
          <AddressField title={key} value={value} key={key} />
        ))}
      </Stack>
      {isDefaultShipping && (
        <DefaultAddress title="default shipping address" shipping />
      )}
      {isDefaultBilling && (
        <DefaultAddress title="default billing address" shipping={false} />
      )}
      <Stack flexDirection="row" justifyContent="space-between">
        <Button variant="contained" onClick={() => setShipping(!shipping)}>
          {isShipping ? 'remove shipping' : 'set shipping'}
        </Button>
        {!isDefaultShipping && (
          <Button variant="contained" onClick={handleDefaultShippingAddress}>
            default shipping
          </Button>
        )}
        {!isDefaultBilling && (
          <Button variant="contained" onClick={handleDefaultBillingAddress}>
            default billing
          </Button>
        )}
        <Button variant="contained" onClick={() => setBilling(!billing)}>
          {isBilling ? 'remove billing' : 'set billing'}
        </Button>
      </Stack>
    </>
  );
};

export default AddressBlock;

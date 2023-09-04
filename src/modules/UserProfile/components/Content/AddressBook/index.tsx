/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  Address,
  BaseAddress,
  MyCustomerUpdate,
} from '@commercetools/platform-sdk';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from 'hooks/useRedux';
import { useEffect, useState } from 'react';
import { RegisteredUserData } from 'types';
import addAddress from 'store/userDataSlice/thunks/addAddress';
import styles from './AddressBook.module.scss';
import AddressBlock from './components/AddressBlock';
import { AddressEnum } from './types';
import AddressForm from './components/AddressForm';

const AddressBook = () => {
  const {
    addresses,
    billingAddressIds,
    shippingAddressIds,
    defaultBillingAddressId,
    defaultShippingAddressId,
  } = useAppSelector((state) => state.userDataSlice.data) as RegisteredUserData;
  const { version } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [billing, setBilling] = useState(false);
  const [indexModify, setIndexModify] = useState<number | null>(null);

  // if (addresses) {
  //   const setDefaultItem = addresses.find(
  //     (address: Address, index: number) => index === indexModify && address.id
  //   );
  //   console.log(addresses, setDefaultItem?.id);
  // }

  let shippingAddress: BaseAddress[] = [];
  let billingAddress: BaseAddress[] = [];

  if (addresses && addresses.length === 1) {
    const singleAddress = addresses[0];
    shippingAddress = [singleAddress];
    billingAddress = [singleAddress];
  } else if (addresses) {
    const shippingAddresses = addresses.filter(
      (el: Address) => shippingAddressIds?.includes(el.id as string)
    );
    if (shippingAddresses.length > 0) {
      shippingAddress = shippingAddresses;
    }

    const billingAddresses = addresses.filter(
      (el: Address) => billingAddressIds?.includes(el.id as string)
    );
    if (billingAddresses.length > 0) {
      billingAddress = billingAddresses;
    }
  }

  useEffect(() => {
    if (addresses) {
      const setBillingItems = addresses.filter(
        (address: Address, index: number) => index === indexModify && address
      );
      // console.log(setBillingItems, billing);

      if (billing && setBillingItems.length > 0) {
        console.log(setBillingItems, billing);

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
    return () => {
      setIndexModify(null);
    };
  }, [indexModify]);

  console.log(addresses, indexModify);

  return (
    <>
      <Box sx={{ mb: '4rem' }}>
        <Typography variant="h3" sx={{ mb: '1rem' }}>
          Address book
        </Typography>
        <Typography variant="h5">
          Update addresses here. Orders are sent to your default delivery
          address
        </Typography>
      </Box>

      <Box
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          mb: '2rem',
        }}
      >
        {addresses &&
          addresses.map((address: BaseAddress, index) => (
            <Stack
              key={Math.random()}
              className={styles.container}
              flexBasis="45%"
              sx={{ border: '1px solid #999' }}
            >
              <AddressBlock
                title={index ? AddressEnum.billing : AddressEnum.shipping}
                address={address}
                billing={billing}
                setBilling={setBilling}
                setIndexModify={setIndexModify}
                indexModify={index}
                defaultAddress={
                  index
                    ? address.id === defaultBillingAddressId
                    : address.id === defaultShippingAddressId
                }
              />
            </Stack>
          ))}
        {/* <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            mb: '2rem',
          }}
        >
          <Typography variant="h3" sx={{ mb: '1rem' }}>
            Shipping address
          </Typography>

          {shippingAddress &&
            shippingAddress.map((address: BaseAddress, index) => (
              <Stack
                key={Math.random()}
                className={styles.container}
                flexBasis="45%"
                sx={{ border: '1px solid #999' }}
              >
                <AddressBlock
                  title={index ? AddressEnum.billing : AddressEnum.shipping}
                  address={address}
                  defaultAddress={
                    index
                      ? address.id === defaultBillingAddressId
                      : address.id === defaultShippingAddressId
                  }
                />
              </Stack>
            ))}
        </Stack>
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            mb: '2rem',
          }}
        >
          <Typography variant="h3" sx={{ mb: '1rem' }}>
            Billing address
          </Typography>

          {shippingAddress &&
            shippingAddress.map((address: BaseAddress, index) => (
              <Stack
                key={Math.random()}
                className={styles.container}
                flexBasis="45%"
                sx={{ border: '1px solid #999' }}
              >
                <AddressBlock
                  title={index ? AddressEnum.billing : AddressEnum.shipping}
                  address={address}
                  defaultAddress={
                    index
                      ? address.id === defaultBillingAddressId
                      : address.id === defaultShippingAddressId
                  }
                />
              </Stack>
            ))}
        </Stack> */}
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setOpen(!open)}
      >
        {open ? 'cancel' : 'add address'}
      </Button>
      {/* <Button
        color="primary"
        variant="contained"
        onClick={() => HandleOpenForm('billing')}
      >
        {openBillingForm ? 'cancel' : 'add Billing'}
      </Button> */}
      {open && <AddressForm />}
    </>
  );
};

export default AddressBook;

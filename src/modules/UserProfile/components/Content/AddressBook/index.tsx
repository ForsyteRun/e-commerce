/* eslint-disable react-hooks/exhaustive-deps */
import { BaseAddress, MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect, useRef, useState } from 'react';
import { RegisteredUserData } from 'types';
import updateAddress from 'store/userDataSlice/thunks/updateAddress';
import styles from './AddressBook.module.scss';
import AddressBlock from './components/AddressBlock';
import AddressForm from './components/AddressForm';

const AddressBook = () => {
  const dispatch = useAppDispatch();
  const {
    addresses,
    defaultBillingAddressId,
    defaultShippingAddressId,
    version,
  } = useAppSelector((state) => state.userDataSlice.data) as RegisteredUserData;

  const [open, setOpen] = useState(false);
  const [defaultShippingAddress, setDefaultShippingAddress] = useState(false);
  const [defaultBillingAddress, setDefaultBillingAddress] = useState(false);
  const [cardId, setCardId] = useState<number | null>(null);

  const firstDefaultShippingRender = useRef(true);
  const firstDefaultBillingRender = useRef(true);

  useEffect(() => {
    if (firstDefaultShippingRender.current) {
      firstDefaultShippingRender.current = false;
    } else if (addresses) {
      if (defaultShippingAddress) {
        const addressId =
          cardId !== null ? String(addresses[cardId]?.id) : undefined;

        const data: MyCustomerUpdate = {
          version,

          actions: [
            {
              action: 'setDefaultShippingAddress',
              addressId,
            },
          ],
        };

        dispatch(updateAddress(data));
        setDefaultShippingAddress(false);
      }
    }
  }, [defaultShippingAddress]);

  useEffect(() => {
    if (firstDefaultBillingRender.current) {
      firstDefaultBillingRender.current = false;
    } else if (addresses) {
      const addressId =
        cardId !== null ? String(addresses[cardId]?.id) : undefined;

      const data: MyCustomerUpdate = {
        version,

        actions: [
          {
            action: 'setDefaultBillingAddress',
            addressId,
          },
        ],
      };

      dispatch(updateAddress(data));
      setDefaultBillingAddress(false);
    }
  }, [defaultBillingAddress]);
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
          mb: '2rem',
        }}
      >
        {addresses &&
          addresses.map((address: BaseAddress, index) => (
            <Stack
              key={Math.random()}
              className={styles.container}
              flexBasis="45%"
              sx={{ border: '1px solid #999', mb: '1rem' }}
            >
              <AddressBlock
                allAddress={address}
                cardIndex={index}
                defaultAddress={
                  index
                    ? address.id === defaultBillingAddressId
                    : address.id === defaultShippingAddressId
                }
                defaultShippingAddress={defaultShippingAddress}
                defaultBillingAddress={defaultBillingAddress}
                setDefaultShippingAddress={setDefaultShippingAddress}
                setDefaultBillingAddress={setDefaultBillingAddress}
                setCardId={setCardId}
              />
            </Stack>
          ))}
      </Box>
      {open ? (
        <Button
          color="primary"
          variant="contained"
          onClick={() => setOpen(!open)}
          sx={{ mb: '1rem' }}
        >
          cancel
        </Button>
      ) : (
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setOpen(!open)}
          sx={{ mb: '1rem' }}
        >
          add address
        </Button>
      )}
      {open && <AddressForm />}
    </>
  );
};

export default AddressBook;

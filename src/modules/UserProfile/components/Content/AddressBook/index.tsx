import { BaseAddress } from '@commercetools/platform-sdk';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { useState } from 'react';
import { RegisteredUserData } from 'types';
import styles from './AddressBook.module.scss';
import AddressBlock from './components/AddressBlock';
import AddressForm from './components/AddressForm';

const AddressBook = () => {
  const { addresses, defaultBillingAddressId, defaultShippingAddressId } =
    useAppSelector((state) => state.userDataSlice.data) as RegisteredUserData;

  const [open, setOpen] = useState(false);

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
                allAddress={address}
                cardIndex={index}
                defaultAddress={
                  index
                    ? address.id === defaultBillingAddressId
                    : address.id === defaultShippingAddressId
                }
              />
            </Stack>
          ))}
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setOpen(!open)}
      >
        {open ? 'cancel' : 'add address'}
      </Button>
      {open && <AddressForm />}
    </>
  );
};

export default AddressBook;

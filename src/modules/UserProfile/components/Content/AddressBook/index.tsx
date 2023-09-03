/* eslint-disable no-console */
import { BaseAddress } from '@commercetools/platform-sdk';
import { Typography, Box, Stack, Button } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import getAddressIfSame from 'modules/UserProfile/helpers/getAddressIfSame';
import { useEffect, useState } from 'react';
import AddressBlock from './components/AddressBlock';
import { AddressEnum } from './types';
import styles from './AddressBook.module.scss';
import AddressForm from './components/AddressForm';

const AddressBook = () => {
  const { data } = useAppSelector((state) => state.userDataSlice);
  const { registrationAccessCode } = useAppSelector(
    (state) => state.registrationAccessCodeSlice
  );
  const { defaultBillingAddressId, defaultShippingAddressId } =
    data as RegisteredUserData;

  const [openForm, setOpenForm] = useState(false);

  const modifyAddress = getAddressIfSame(data as RegisteredUserData);

  useEffect(() => {
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registrationAccessCode]);
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

      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          mb: '2rem',
        }}
      >
        {modifyAddress &&
          modifyAddress.map((address: BaseAddress, index) => (
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
      <Button
        color="primary"
        variant="contained"
        sx={{ width: '10%' }}
        onClick={() => setOpenForm(!openForm)}
      >
        {openForm ? 'add' : 'cancel'}
      </Button>
      {openForm && <AddressForm />}
    </>
  );
};

export default AddressBook;

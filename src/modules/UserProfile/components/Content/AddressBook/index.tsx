import { BaseAddress } from '@commercetools/platform-sdk';
import { Typography, Box, Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import AddressBlock from './components/AddressBlock';
import { AddressTypesEnum } from './types';
import styles from './AddressBook.module.scss';

const AddressBook = () => {
  const { addresses } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

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

      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {addresses &&
          addresses.map((address: BaseAddress, index) => (
            <Stack
              key={address.id}
              className={styles.container}
              flexBasis="45%"
              sx={{ border: '1px solid #999' }}
            >
              <AddressBlock
                title={
                  index ? AddressTypesEnum.billing : AddressTypesEnum.shipping
                }
                address={address}
              />
            </Stack>
          ))}
      </Stack>
    </>
  );
};

export default AddressBook;

import { BaseAddress } from '@commercetools/platform-sdk';
import { Typography, Box, Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import AddressBlock from './components/AddressBlock';
import { AddressEnum } from './types';
import styles from './AddressBook.module.scss';

const AddressBook = () => {
  const { data } = useAppSelector((state) => state.userDataSlice);
  const {
    addresses,
    defaultBillingAddressId,
    defaultShippingAddressId,
    billingAddressIds,
    shippingAddressIds,
  } = data as RegisteredUserData;

  const isEqualAddress = shippingAddressIds?.every(
    (item) => billingAddressIds?.includes(item)
  );

  const modifyAddress = isEqualAddress
    ? [...addresses, ...addresses]
    : addresses;

  console.log(data);

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
    </>
  );
};

export default AddressBook;

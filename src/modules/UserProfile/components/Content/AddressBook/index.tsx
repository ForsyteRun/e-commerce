import { Typography, Box, Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';

const AddressBook = () => {
  const { addresses } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  console.log(addresses);

  return (
    <>
      street, city, state, zip code, country
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
        <Stack>
          <Typography variant="h6" sx={{ mb: '1rem' }}>
            Billing address
          </Typography>
          <Stack>
            <Typography variant="h6" sx={{ mb: '1rem' }}>
              street {}
            </Typography>
            <Typography variant="h6" sx={{ mb: '1rem' }}>
              Billing address
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h6" sx={{ mb: '1rem' }}>
            Shipping address
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default AddressBook;

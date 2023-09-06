import { Typography, Box } from '@mui/material';

const MyAccount = () => {
  return (
    <Box sx={{ mb: '4rem' }}>
      <Typography variant="h3" sx={{ mb: '1rem' }}>
        My Account
      </Typography>
      <Typography variant="h5">
        Here you can view and track past orders, and control the emails we send
        you. You can also manage the account details we use to speed you through
        checkout.
      </Typography>
    </Box>
  );
};

export default MyAccount;

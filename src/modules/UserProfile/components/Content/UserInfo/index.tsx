import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { EditInfo, ShowInfo } from './components';

const UserInfo: React.FC = () => {
  const [edit, setEdit] = React.useState(false);
  const [userFullData, setUserFullData] = React.useState<CustomerDraft>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
  });

  return (
    <>
      <Box sx={{ mb: '4rem' }}>
        <Typography variant="h3" sx={{ mb: '1rem' }}>
          Personal details
        </Typography>
        <Typography variant="h5">
          Keep these up to date so you can breeze through checkout and see the
          best personalized offers!
        </Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{ display: 'block', float: 'right' }}
          onClick={() => setEdit(!edit)}
        >
          submit
        </Button>
      </Box>
      {!edit ? (
        <ShowInfo userFullData={userFullData} />
      ) : (
        <EditInfo setUserFullData={setUserFullData} onClick={setEdit} />
      )}
    </>
  );
};

export default UserInfo;

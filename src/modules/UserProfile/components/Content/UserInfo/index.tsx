import { Box, Typography } from '@mui/material';
import React from 'react';
import { EditInfo, ShowInfo } from './components';

const UserInfo: React.FC = () => {
  const [edit, setEdit] = React.useState(false);

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
      </Box>
      {!edit ? <ShowInfo /> : <EditInfo onClick={() => setEdit(!edit)} />}
    </>
  );
};

export default UserInfo;

import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ShowInfo } from './components';

const UserInfo: React.FC = () => {
  // const [edit, setEdit] = React.useState(false);

  return (
    <div>
      <Box sx={{ mb: '4rem' }}>
        <Typography variant="h3" sx={{ mb: '1rem' }}>
          Personal details
        </Typography>
        <Typography variant="h5">
          Keep these up to date so you can breeze through checkout and see the
          best personalized offers!
        </Typography>
      </Box>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          p: '0 1rem',
          mb: '1rem',
        }}
      >
        {/* <Button variant="contained" onClick={() => setEdit(!edit)}>
          edit
        </Button> */}
      </Stack>
      <ShowInfo />
      {/* {!edit ? <ShowInfo /> : <EditInfo />} */}
    </div>
  );
};

export default UserInfo;

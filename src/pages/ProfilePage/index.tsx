import { Stack, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { AsideMenu } from 'modules/UserProfile';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PathNames } from 'types';
import { fetchUserDataByRefreshToken } from 'store/userDataSlice/thunks';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.userDataSlice);
  const { authenticationMode } = useAppSelector(
    (state) => state.userDataSlice.data
  );

  React.useEffect(() => {
    if (loading !== 'pending' && authenticationMode === 'Password') {
      dispatch(fetchUserDataByRefreshToken());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (authenticationMode !== 'Password' && loading === 'succeeded') {
      navigate(PathNames.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticationMode]);

  return (
    <Stack sx={{ flexDirection: 'row', gap: '2rem', p: '1rem' }}>
      <Paper sx={{ p: '1rem', height: 'fit-content' }}>
        <AsideMenu />
      </Paper>
      <Paper sx={{ p: '2rem', flexBasis: '70%' }}>
        <Outlet />
      </Paper>
    </Stack>
  );
};

export default ProfilePage;

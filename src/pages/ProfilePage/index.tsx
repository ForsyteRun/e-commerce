// import ProfilePageUpdateRequestExample from './ProfilePageUpdateRequestExample';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { AsideMenu } from 'modules/UserProfile';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PathNames } from 'types';
import { fetchUserDataByRefreshToken } from 'store/userDataSlice/thunks';
import styles from './ProfilePage.module.scss';

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
    <Paper className={styles.container}>
      <AsideMenu />
      <Box sx={{ p: '1rem', flexBasis: '70%' }}>
        <Outlet />
      </Box>
    </Paper>
  );
  // return <ProfilePageUpdateRequestExample />;
};

export default ProfilePage;

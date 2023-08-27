import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppSelector } from 'hooks/useRedux';
import { Outlet, useNavigate } from 'react-router-dom';
import { PathNames } from 'types';
import AsideMenu from '../AsideMenu';
import styles from './UserProfileMainPage.module.scss';

const UserProfileMainPage: React.FC = () => {
  const navigate = useNavigate();

  const { authenticationMode } = useAppSelector(
    (state) => state.userDataSlice.data
  );

  const isRegistered = authenticationMode === 'Password';

  if (isRegistered) {
    return (
      <Paper className={styles.container}>
        <AsideMenu />
        <Box sx={{ p: '1rem', flexGrow: '1' }}>
          <Outlet />
        </Box>
      </Paper>
    );
  }
  navigate(PathNames.login);
  return null;
};

export default UserProfileMainPage;

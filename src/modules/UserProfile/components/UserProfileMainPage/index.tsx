import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import styles from './UserProfileMainPage.module.scss';
import AsideMenu from '../AsideMenu';

const UserProfileMainPage: React.FC = () => {
  return (
    <Paper className={styles.container}>
      <AsideMenu />
      <Box sx={{ p: '1rem', height: '100%' }}>
        <Outlet />
      </Box>
    </Paper>
  );
};

export default UserProfileMainPage;

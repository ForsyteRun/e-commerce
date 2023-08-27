import { Paper, Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import LogOutButton from 'components/Header/components/UserNavigation/components/LogOutButton';
import styles from './UserProfile.module.scss';

const UserProfile = () => {
  const { firstName } = useAppSelector(
    (state) => state.userDataSlice.data as RegisteredUserData
  );

  return (
    <Paper className={styles.container}>
      <aside className={styles.aside}>
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div className={styles.title}>Welcome, {firstName || 'User'}</div>
          <LogOutButton />
        </Stack>
      </aside>
    </Paper>
  );
};

export default UserProfile;

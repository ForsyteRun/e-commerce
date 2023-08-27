import { Stack } from '@mui/material';
import LogOutButton from 'components/Header/components/UserNavigation/components/LogOutButton';
import { NavLink } from 'react-router-dom';
import { PathNames, RegisteredUserData } from 'types';
import { useAppSelector } from 'hooks/useRedux';
import styles from './AsideMenu.module.scss';

const AsideMenu = () => {
  const { firstName } = useAppSelector(
    (state) => state.userDataSlice.data as RegisteredUserData
  );

  return (
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
      <Stack>
        <NavLink to={PathNames.profileInfo}>Personal information</NavLink>
        <NavLink to={PathNames.profileAddress}>Address book</NavLink>
      </Stack>
    </aside>
  );
};

export default AsideMenu;

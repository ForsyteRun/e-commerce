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

  const activeLink = ({ isActive }: Record<string, boolean>) =>
    isActive ? styles.active__link : '';

  return (
    <aside className={styles.aside}>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div className={styles.title}>Welcome, {firstName || 'User'}</div>
        <LogOutButton />
      </Stack>
      <Stack className={styles.links__block}>
        <NavLink to={PathNames.profileInfo} className={activeLink}>
          Personal information
        </NavLink>
        <NavLink to={PathNames.profileAddress} className={activeLink}>
          Address book
        </NavLink>
        <NavLink to={PathNames.profilePassword} className={activeLink}>
          Change password
        </NavLink>
      </Stack>
    </aside>
  );
};

export default AsideMenu;

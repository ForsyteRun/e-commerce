import { Stack } from '@mui/material';
import LogOutButton from 'components/Header/components/UserNavigation/components/LogOutButton';
import { RegisteredUserData } from 'types';
import { useAppSelector } from 'hooks/useRedux';
import { linkAsideData } from 'modules/UserProfile/constants';
import styles from './AsideMenu.module.scss';
import AsideLink from './components/AsideLink';

const AsideMenu = () => {
  const { firstName } = useAppSelector(
    (state) => state.userDataSlice.data as RegisteredUserData
  );

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
        {linkAsideData.map(({ title, path, end }) => (
          <AsideLink key={title} title={title} path={path} end={end} />
        ))}
      </Stack>
    </aside>
  );
};

export default AsideMenu;

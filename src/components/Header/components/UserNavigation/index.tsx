import { useAppSelector } from '../../../../hooks/useRedux';
import LogOut from './components/LogOut';
import NavLinkButton from '../../../../UI/NavLinkButton';
import { PathNames } from '../../../../types';
import styles from './UserNavigation.module.scss';

const UserNavigation = () => {
  const { loading, data } = useAppSelector((state) => state.userDataSlice);
  const isLoadingSuceeded = loading === 'succeeded';
  const isAnomynousUser = isLoadingSuceeded && data.type === 'anonymous';
  const isRegistered = isLoadingSuceeded && data.type === 'registered';

  return (
    <nav className={styles.userNavigation}>
      {isRegistered && <LogOut />}
      {isAnomynousUser && (
        <>
          <NavLinkButton path={PathNames.register}>Register</NavLinkButton>
          <NavLinkButton path={PathNames.login}>Login</NavLinkButton>
        </>
      )}
    </nav>
  );
};

export default UserNavigation;

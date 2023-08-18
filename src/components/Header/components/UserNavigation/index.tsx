import { useAppSelector } from '../../../../hooks/useRedux';
import LogOut from './components/LogOut';
import NavLinkButton from '../../../../UI/NavLinkButton';
import { PathNames } from '../../../../types';
import styles from './UserNavigation.module.scss';

const UserNavigation = () => {
  const { data } = useAppSelector((state) => state.userDataSlice);
  const isAnomynousUser = data.type === 'anonymous';
  const isRegistered = data.type === 'registered';

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

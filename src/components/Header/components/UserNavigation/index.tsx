import { useAppSelector } from '../../../../hooks/useRedux';
import LogOut from './components/LogOut';
import NavLinkButton from '../../../../UI/NavLinkButton';
import { PathNames } from '../../../../types';
import styles from './UserNavigation.module.scss';

const UserNavigation = () => {
  const userType = useAppSelector((state) => state.userDataSlice.data.type);
  const isRegistered = userType === 'registered';

  return (
    <nav className={styles.userNavigation}>
      {isRegistered && <LogOut />}
      {!isRegistered && (
        <>
          <NavLinkButton path={PathNames.register}>Register</NavLinkButton>
          <NavLinkButton path={PathNames.login}>Login</NavLinkButton>
        </>
      )}
    </nav>
  );
};

export default UserNavigation;

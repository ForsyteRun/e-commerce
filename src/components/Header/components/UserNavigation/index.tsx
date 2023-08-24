import { useAppSelector } from '../../../../hooks/useRedux';
import LogOut from './components/LogOut';
import NavLinkButton from '../../../../UI/NavLinkButton';
import { PathNames } from '../../../../types';
import styles from './UserNavigation.module.scss';
import UserProfile from './components/UserProfile';

const UserNavigation = () => {
  const userType = useAppSelector((state) => state.userDataSlice.data.type);
  const isRegistered = userType === 'registered';

  const notRegisteredUserButtons = (
    <>
      <NavLinkButton path={PathNames.register}>Register</NavLinkButton>
      <NavLinkButton path={PathNames.login}>Login</NavLinkButton>
    </>
  );
  const registeredUserButtons = (
    <>
      <LogOut />
      <UserProfile />
    </>
  );

  return (
    <nav className={styles.userNavigation}>
      {isRegistered ? registeredUserButtons : notRegisteredUserButtons}
    </nav>
  );
};

export default UserNavigation;

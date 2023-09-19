import { NavLink } from 'react-router-dom';
import { PathNames } from 'types';
import styles from './RegistrationLink.module.scss';

const RegistrationLink = () => {
  return (
    <div className={styles.container}>
      <span>Don&#39;t have an account?</span>
      <NavLink className={styles.registrationLink} to={PathNames.register}>
        Create new account
      </NavLink>
    </div>
  );
};

export default RegistrationLink;

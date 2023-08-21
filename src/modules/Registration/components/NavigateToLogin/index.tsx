import { NavLink } from 'react-router-dom';
import { PathNames } from '../../../../types';
import styles from './NavigateToLogin.module.scss';

const NavigateToLogin = () => {
  return (
    <h3 className={styles.title}>
      <span>Do you have an account? </span>
      <NavLink to={PathNames.login} className={styles.login}>
        LOG IN
      </NavLink>
    </h3>
  );
};

export default NavigateToLogin;

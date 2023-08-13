import { NavLink } from 'react-router-dom';
import { PathNames } from '../../../../types';
import styles from './NavigateToLogin.module.scss';

function NavigateToLogin() {
  return (
    <h3 className={styles.title}>
      Do you have an account?
      <NavLink to={PathNames.login} className={styles.login}>
        <br />
        LOG IN
      </NavLink>
    </h3>
  );
}

export default NavigateToLogin;

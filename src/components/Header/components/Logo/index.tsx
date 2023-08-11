import { NavLink } from 'react-router-dom';
import { PathNames } from '../../../../types';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <NavLink className={styles.logo} to={PathNames.index}>
      eCommerce
    </NavLink>
  );
}

export default Logo;

import { useRouteError, NavLink } from 'react-router-dom';
import RoutingErrorMessage from './components/RoutingErrorMessage';
import styles from './RoutingError.module.scss';
import { PathNames } from '../../types';

function RoutingError() {
  const error = useRouteError();
  const message = RoutingErrorMessage(error);

  return (
    <div className={styles.routingError}>
      <h1 className={styles.oops}>Oops!</h1>
      {message}
      <NavLink className={styles.button} to={PathNames.index}>
        GO TO HOMEPAGE
      </NavLink>
    </div>
  );
}

export default RoutingError;

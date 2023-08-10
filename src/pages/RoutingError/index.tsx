import { useRouteError } from 'react-router-dom';
import Header from '../../components/Header';
import NavLinkButton from '../../UI/NavLinkButton';
import RoutingErrorMessage from './components/RoutingErrorMessage';
import { PathNames } from '../../types';
import styles from './RoutingError.module.scss';

function RoutingError() {
  const error = useRouteError();
  const message = RoutingErrorMessage(error);

  return (
    <>
      <Header />
      <main className={styles.routingError}>
        <h1 className={styles.oops}>Oops!</h1>
        {message}
        <NavLinkButton path={PathNames.index}>GO TO HOMEPAGE</NavLinkButton>
      </main>
    </>
  );
}

export default RoutingError;

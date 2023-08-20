import { useRouteError } from 'react-router-dom';
import Header from 'components/Header';
import NavLinkButton from 'UI/NavLinkButton';
import { PathNames } from 'types';
import RoutingErrorMessage from './components/RoutingErrorMessage';
import styles from './RoutingError.module.scss';

const RoutingError = () => {
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
};

export default RoutingError;

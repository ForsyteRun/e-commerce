import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import Header from 'components/Header';
import NavLinkButton from 'UI/NavLinkButton';
import Wrapper from 'UI/Wrapper';
import { PathNames } from 'types';
import { identifyUser } from 'helpers';
import RoutingErrorMessage from './components/RoutingErrorMessage';
import styles from './RoutingError.module.scss';

const RoutingError = () => {
  const error = useRouteError();
  const message = RoutingErrorMessage(error);

  useEffect(() => {
    identifyUser();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <div className={styles.container}>
            <h1 className={styles.oops}>Oops!</h1>
            {message}
            <NavLinkButton path={PathNames.index}>GO TO HOMEPAGE</NavLinkButton>
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default RoutingError;

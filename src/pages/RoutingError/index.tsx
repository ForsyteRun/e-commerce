import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import Header from 'components/Header';
import NavLinkButton from 'UI/NavLinkButton';
import Wrapper from 'UI/Wrapper';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import identificateUserOnAppStart from 'helpers/identificateUserOnAppStart';
import { PathNames } from 'types';
import RoutingErrorMessage from './components/RoutingErrorMessage';
import styles from './RoutingError.module.scss';

const RoutingError = () => {
  const dispatch = useAppDispatch();
  const { authenticationMode } = useAppSelector(
    (state) => state.userDataSlice.data
  );
  const error = useRouteError();
  const message = RoutingErrorMessage(error);

  useEffect(() => {
    identificateUserOnAppStart(dispatch, authenticationMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

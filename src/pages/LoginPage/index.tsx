import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PathNames } from 'types';
import Spinner from 'UI/Spinner';
import { useAppSelector } from '../../hooks/useRedux';
import LoginForm from './components/LoginForm';
import styles from './LoginPage.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const { authenticationMode } = useAppSelector(
    (state) => state.userDataSlice.data
  );

  useEffect(() => {
    if (authenticationMode === 'Password') {
      navigate(PathNames.index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticationMode]);

  const content = (
    <div className={styles.container}>
      <h1 className={styles.title}>LOG IN</h1>
      <LoginForm />
    </div>
  );

  return authenticationMode ? content : <Spinner />;

  // return (
  // <>
  //   <h1 className={styles.title}>LOG IN</h1>
  //   <LoginForm />
  // </>
  // );
};

export default Login;

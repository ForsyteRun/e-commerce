import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PathNames } from 'types';
import { useAppSelector } from '../../hooks/useRedux';
import LoginForm from './components/LoginForm';
import styles from './LoginPage.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const userType = useAppSelector((state) => state.userDataSlice.data.type);

  useEffect(() => {
    if (userType === 'registered') {
      navigate(PathNames.index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType]);

  return (
    <>
      <h1 className={styles.title}>LOG IN</h1>
      <LoginForm />
    </>
  );
};

export default Login;

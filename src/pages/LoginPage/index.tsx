import LoginForm from './components/LoginForm';
import styles from './LoginPage.module.scss';

function Login() {
  return (
    <>
      <h1 className={styles.title}>LOG IN</h1>
      <LoginForm />
    </>
  );
}

export default Login;

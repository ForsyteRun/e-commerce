import { useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { LoginFormValues } from '../../../../types';
import PasswordHideIcon from './components/PasswordIcons/passwordHideIcon';
import PasswordShowIcon from './components/PasswordIcons/passwordShowIcon';
import EmailField from './components/EmailField';
import PasswordField from './components/PasswordField';
import styles from './LoginForm.module.scss';

function LoginForm(): JSX.Element {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(PasswordShowIcon);

  const togglePasswordVisibility: () => void = () => {
    if (type === 'password') {
      setIcon(PasswordHideIcon);
      setType('text');
    } else {
      setIcon(PasswordShowIcon);
      setType('password');
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values: LoginFormValues) => {
        console.log(values);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }: FormikProps<LoginFormValues>) => (
        <div className={styles.login}>
          <div className={styles.form}>
            <Form onSubmit={handleSubmit}>
              <EmailField
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <PasswordField
                type={type}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                togglePasswordVisibility={togglePasswordVisibility}
                icon={icon}
              />
              <button type="submit" className={styles.buttonLogin}>
                LOG IN
              </button>
            </Form>
            <p className={styles.accountText}>
              Don&#39;t have an account?
              <a href="/register" className={styles.createAccount}>
                Create new account
              </a>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;

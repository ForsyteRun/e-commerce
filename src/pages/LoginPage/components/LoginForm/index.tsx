import { useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { NavLink } from 'react-router-dom';
import {
  InputType,
  LoginFormValues,
  PathNames,
  VoidFunction,
} from '../../../../types';
import { ReactComponent as PasswordHideIcon } from '../../../../assets/images/svg/eye-password-hide.svg';
import { ReactComponent as PasswordShowIcon } from '../../../../assets/images/svg/eye-password-show.svg';
import EmailField from './components/EmailField';
import PasswordField from './components/PasswordField';
import styles from './LoginForm.module.scss';

function LoginForm(): JSX.Element {
  const [inputType, setInputType] = useState(InputType.Password);
  const [icon, setIcon] = useState(<PasswordShowIcon />);

  const togglePasswordVisibility: VoidFunction = () => {
    if (inputType === InputType.Password) {
      setIcon(<PasswordHideIcon />);
      setInputType(InputType.Text);
    } else {
      setIcon(<PasswordShowIcon />);
      setInputType(InputType.Password);
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
                type={inputType}
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
              <NavLink className={styles.createAccount} to={PathNames.register}>
                Create new account
              </NavLink>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;

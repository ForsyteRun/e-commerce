import { useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { InputType, LoginFormValues, VoidFunction } from '../../../../types';
import { ReactComponent as PasswordHideIcon } from '../../../../assets/images/svg/eye-password-hide.svg';
import { ReactComponent as PasswordShowIcon } from '../../../../assets/images/svg/eye-password-show.svg';
import EmailField from './components/EmailField';
import PasswordField from './components/PasswordField';
import RegistrationLink from './components/RegistrationLink';
import styles from './LoginForm.module.scss';
import LoginError from './components/LoginError';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { fetchUserLoginData } from '../../../../store/userDataSlice/thunks';
import { resetUserDataError } from '../../../../store/userDataSlice';

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loginError = useAppSelector((state) => state.userDataSlice.error);
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
      onSubmit={async (values: LoginFormValues, { setSubmitting }) => {
        setSubmitting(true);
        await dispatch(fetchUserLoginData(values));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }: FormikProps<LoginFormValues>) => (
        <div className={styles.login}>
          <div className={styles.form}>
            {loginError && <LoginError message={loginError} />}
            <Form noValidate onSubmit={handleSubmit}>
              <EmailField
                values={values}
                errors={errors}
                touched={touched}
                handleChange={(e) => {
                  handleChange(e);
                  if (loginError) dispatch(resetUserDataError());
                }}
                handleBlur={handleBlur}
              />
              <PasswordField
                type={inputType}
                values={values}
                errors={errors}
                touched={touched}
                handleChange={(e) => {
                  handleChange(e);
                  if (loginError) dispatch(resetUserDataError());
                }}
                handleBlur={handleBlur}
                togglePasswordVisibility={togglePasswordVisibility}
                icon={icon}
              />
              <button
                type="submit"
                className={styles.buttonLogin}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Loading...' : 'LOG IN'}
              </button>
            </Form>
            <RegistrationLink />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;

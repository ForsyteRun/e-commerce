import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { InputType, LoginFormValues } from 'types';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { resetUserDataError } from 'store/userDataSlice';
import { fetchUserLoginData } from 'store/userDataSlice/thunks';
import { Box, Button, IconButton, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './LoginForm.module.scss';
import LoginError from './components/LoginError';
import validationSchema from './helpers/validationSchema';
import RegistrationLink from './components/RegistrationLink';
import handleLoginError from './helpers/handleLoginError';

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector((state) => state.userDataSlice);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    if (error) {
      setLoginErrorMessage(handleLoginError(error));
    } else {
      setLoginErrorMessage('');
    }
  }, [error]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values: LoginFormValues, { setSubmitting }) => {
      setSubmitting(true);
      const userData: LoginFormValues = {
        ...values,
        anonymousId: data.id || undefined,
      };
      await dispatch(fetchUserLoginData(userData));
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    if (loginErrorMessage) {
      dispatch(resetUserDataError());
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        {loginErrorMessage && <LoginError message={loginErrorMessage} />}
        <form noValidate onSubmit={formik.handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              placeholder="user@example.com"
              value={formik.values.email}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
              type={showPassword ? InputType.Text : InputType.Password}
              value={formik.values.password}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              margin="normal"
            />
          </Box>
          <Box mb={2}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              size="large"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Loading...' : 'LOG IN'}
            </Button>
          </Box>
        </form>
        <RegistrationLink />
      </div>
    </div>
  );
};

export default LoginForm;

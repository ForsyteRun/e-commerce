import { useState } from 'react';
import { useFormik } from 'formik';
import { InputType, LoginFormValues } from 'types';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { fetchUserLoginData } from 'store/userDataSlice/thunks';
import { resetUserDataError } from 'store/userDataSlice';
import { Box, Button, IconButton, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './LoginForm.module.scss';
import LoginError from './components/LoginError';
import validationSchema from './helpers/validationSchema';
import RegistrationLink from './components/RegistrationLink';

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loginError = useAppSelector((state) => state.userDataSlice.error);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values: LoginFormValues, { setSubmitting }) => {
      setSubmitting(true);
      await dispatch(fetchUserLoginData(values));
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    if (loginError) {
      dispatch(resetUserDataError());
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        {loginError && <LoginError message={loginError} />}
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

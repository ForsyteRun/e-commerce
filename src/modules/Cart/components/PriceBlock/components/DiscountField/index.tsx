/* eslint-disable react-hooks/exhaustive-deps */
import { MyCartUpdateAction } from '@commercetools/platform-sdk';
import { AlertColor, Button, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { updateCart } from 'store/cartSlice/thunks';
import { useEffect, useState } from 'react';
import showSnackbarMessage from 'helpers/showSnackbarMessage';
import styles from './DiscountField.module.scss';

const DiscountField = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.cartSlice);

  const [open, setOpen] = useState(false);

  const showSnackbar = (status: AlertColor, message: string) => {
    if (open) {
      showSnackbarMessage({ status, message });
      setOpen(false);
    }
  };

  useEffect(() => {
    if (loading === 'succeeded') {
      showSnackbar('success', 'activated!');
    } else if (loading === 'failed') {
      showSnackbar('error', 'code not valid');
    }
  }, [loading]);

  const formik = useFormik({
    initialValues: { code: '' },
    onSubmit: (value, { resetForm }) => {
      const action: MyCartUpdateAction = {
        action: 'addDiscountCode',
        code: value.code,
      };

      dispatch(updateCart(action));
      resetForm();
      setOpen(true);
    },
  });

  return (
    <div className={styles.form}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="code"
          name="code"
          label="code"
          value={formik.values.code}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button color="primary" variant="outlined" type="submit">
                  ok
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};

export default DiscountField;

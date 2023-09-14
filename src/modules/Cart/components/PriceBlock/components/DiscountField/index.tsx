import { MyCartUpdateAction } from '@commercetools/platform-sdk';
import { Button, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useAppDispatch } from 'hooks/useRedux';
import { updateCart } from 'store/cartSlice/thunks';
import styles from './DiscountField.module.scss';

const DiscountField = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { code: '' },
    onSubmit: (value, { resetForm }) => {
      const action: MyCartUpdateAction = {
        action: 'addDiscountCode',
        code: value.code,
      };

      dispatch(updateCart(action));
      resetForm();
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

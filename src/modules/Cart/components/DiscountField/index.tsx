import { MyCartUpdateAction } from '@commercetools/platform-sdk';
import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { updateCart } from 'store/cartSlice/thunks';

const DiscountField = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.cartSlice);

  return (
    <Formik
      initialValues={{ code: '' }}
      onSubmit={(value: { code: string }) => {
        const action: MyCartUpdateAction = {
          action: 'addDiscountCode',
          code: value.code,
        };

        dispatch(updateCart(action));
      }}
    >
      <Form
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <Field
          name="code"
          label="Enter promo code"
          variant="outlined"
          placeholder="Enter promo code"
          style={{ padding: '9px', marginRight: '1rem' }}
        />
        {error && <div>Not found</div>}
        <Button variant="contained" color="primary" type="submit">
          Use
        </Button>
      </Form>
    </Formik>
  );
};

export default DiscountField;

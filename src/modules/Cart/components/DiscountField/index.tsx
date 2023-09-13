import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';

const DiscountField = () => {
  return (
    <Formik
      initialValues={{ code: '' }}
      onSubmit={(value) => console.log(value)}
    >
      <Form>
        <Field
          name="code"
          label="Enter promo code"
          variant="outlined"
          fullWidth
          placeholder="Enter promo code"
        />
        <Button variant="contained" color="primary" type="submit">
          Use
        </Button>
      </Form>
    </Formik>
  );
};

export default DiscountField;

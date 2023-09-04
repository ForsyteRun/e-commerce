import { MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import validCountries from 'modules/Registration/components/adress/constants';
import updateAddress from 'store/userDataSlice/thunks/updateAddress';
import { RegisteredUserData } from 'types';
import validationSchema from './validation';

const AddressForm = () => {
  const dispatch = useAppDispatch();
  const { version } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const formik = useFormik({
    initialValues: {
      country: validCountries[0],
      city: '',
      state: '',
      postalCode: '',
      streetName: '',
    },
    validationSchema,
    onSubmit: (value) => {
      const addAddressData: MyCustomerUpdate = {
        version,
        actions: [
          {
            action: 'addAddress',
            address: value,
          },
        ],
      };

      dispatch(updateAddress(addAddressData));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}
    >
      <TextField
        fullWidth
        id="streetName"
        name="streetName"
        label="streetName"
        value={formik.values.streetName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.streetName && Boolean(formik.errors.streetName)}
        helperText={formik.touched.streetName && formik.errors.streetName}
      />
      <TextField
        fullWidth
        id="postalCode"
        name="postalCode"
        label="postalCode"
        value={formik.values.postalCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
        helperText={formik.touched.postalCode && formik.errors.postalCode}
      />
      <TextField
        fullWidth
        id="city"
        name="city"
        label="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
      />
      <TextField
        fullWidth
        id="state"
        name="state"
        label="state"
        value={formik.values.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.state && Boolean(formik.errors.state)}
        helperText={formik.touched.state && formik.errors.state}
      />
      <Select
        fullWidth
        id="country"
        name="country"
        label="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.country && Boolean(formik.errors.country)}
      >
        {validCountries.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddressForm;

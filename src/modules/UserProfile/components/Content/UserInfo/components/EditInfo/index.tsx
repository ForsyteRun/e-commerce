import { CustomerDraft } from '@commercetools/platform-sdk';
import { Field, Form, Formik } from 'formik';
import { Select } from 'modules/Registration';
import { Button } from '@mui/material';
import UserInfoSchema from '../../validation';
import styles from './editInfo.module.scss';

const initialValues: Omit<CustomerDraft, 'email'> = {
  firstName: '',
  lastName: '',
  dateOfBirth: '1985-44-44',
};

const EditInfo = () => {
  return (
    <Formik<Omit<CustomerDraft, 'email'>>
      initialValues={initialValues}
      validationSchema={UserInfoSchema}
      onSubmit={(values: Omit<CustomerDraft, 'email'>) => {
        // eslint-disable-next-line no-console
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <Field
            name="firstName"
            placeholder="Enter first name"
            className={styles.input}
          />
          {errors.firstName && touched.firstName && (
            <div className={styles.errorValid}>{errors.firstName}</div>
          )}
          <Field
            name="lastName"
            placeholder="Enter last name"
            className={styles.input}
          />
          {errors.lastName && touched.lastName && (
            <div className={styles.errorValid}>{errors.lastName}</div>
          )}
          <Select />
          <Button type="submit">Edit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditInfo;

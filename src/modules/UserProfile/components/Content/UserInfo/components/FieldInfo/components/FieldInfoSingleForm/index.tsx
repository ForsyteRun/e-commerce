import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from '@mui/material';
import { InitialValues } from '../../type';
import { IFieldInfoSingleForm } from './types';

const FieldInfoSingleForm: React.FC<IFieldInfoSingleForm> = ({
  title,
  submit,
  validation,
}) => {
  const initialValues: InitialValues = {
    [title]: '',
  };

  return (
    <Formik<InitialValues>
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values) => {
        submit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name={title} placeholder={`enter ${title}`} />
          {errors && touched && <div>{errors[title]}</div>}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FieldInfoSingleForm;

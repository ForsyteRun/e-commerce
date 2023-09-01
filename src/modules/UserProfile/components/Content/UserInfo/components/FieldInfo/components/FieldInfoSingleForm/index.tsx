import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { InitialValues } from '../../type';
import { IFieldInfoSingleForm } from './types';
import styles from './FieldInfoSingleForm.module.scss';

const FieldInfoSingleForm: React.FC<IFieldInfoSingleForm> = ({
  title,
  validation,
  submit,
  setOpen,
}) => {
  // const [data, setData] = React.useState(value);

  const initialValues: InitialValues = {
    [title]: '',
  };

  return (
    <>
      <Formik<InitialValues>
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values) => {
          submit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field
              name={title}
              placeholder={`enter ${title}`}
              className={styles.input}
            />
            <Button type="submit">Submit</Button>

            {errors && touched && (
              <div className="errorValid">{errors[title]}</div>
            )}
          </Form>
        )}
      </Formik>
      <ClearIcon
        fontSize="large"
        sx={{ cursor: 'pointer' }}
        onClick={() => setOpen(false)}
      />
    </>
  );
};

export default FieldInfoSingleForm;

import ModeIcon from '@mui/icons-material/Mode';
import { Stack, Typography, Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import { ObjectSchema } from 'yup';
import styles from './fieldInfo.module.scss';

interface IFieldInfo {
  value: string | undefined;
  title: string;
  validation:
    | ObjectSchema<Record<string, string>>
    | ObjectSchema<Record<string, Date>>;
  setUserData: Dispatch<SetStateAction<Record<string, string | undefined>>>;
}
const FieldInfo: React.FC<IFieldInfo> = ({
  value,
  title,
  validation,
  setUserData,
}) => {
  const [open, setOpen] = React.useState(false);
  // const [formValue, setFormValue] = React.useState('');

  const handleSubmit = (values: Record<string, string>) => {
    // const dataField = getModifyTitle(Object.keys(data));

    // eslint-disable-next-line no-console
    console.log(values, setUserData);

    // setUserData({ [dataField]: formValue });
    // setOpen(false);
  };

  const initialValues: InitialValues = {
    [title]: '',
  };

  interface InitialValues {
    [key: string]: string;
  }

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      className={styles.info}
    >
      {!open ? (
        <>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5" sx={{ flexBasis: '50%' }}>
            {value}
          </Typography>
          <ModeIcon sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
        </>
      ) : (
        <Formik<InitialValues>
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values) => {
            handleSubmit(values);
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
      )}
    </Stack>
  );
};

export default FieldInfo;

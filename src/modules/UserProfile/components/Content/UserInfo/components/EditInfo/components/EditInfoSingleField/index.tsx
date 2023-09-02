import { Field, FormikValues, useFormikContext } from 'formik';
import { FC, ReactNode } from 'react';
import styles from './EditInfoSingleField.module.scss';

interface IEditInfoSingleField {
  name: string;
}

const EditInfoSingleField: FC<IEditInfoSingleField> = ({ name }) => {
  const formikProps = useFormikContext<FormikValues>();

  const { errors, touched } = formikProps;

  return (
    <div className={styles.input__container}>
      <Field
        name={name}
        placeholder={`Enter ${name}`}
        className={styles.input}
      />
      {errors[name] && touched[name] && (
        <div className="errorValid">{errors[name] as ReactNode}</div>
      )}
    </div>
  );
};

export default EditInfoSingleField;

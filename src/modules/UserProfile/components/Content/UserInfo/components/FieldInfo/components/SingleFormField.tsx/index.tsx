import { MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { createAction } from 'modules/UserProfile/helpers';
import React, { FC, useEffect, useRef } from 'react';
import { RegisteredUserData, RequestStatusCode } from 'types';
import { updateUserData } from 'store/userDataSlice/thunks';
import { InitialValues } from '../../type';
import styles from './singleFormField.module.scss';
import { ISingleFormField } from './types';

const SingleFormField: FC<ISingleFormField> = ({
  title,
  validation,
  setOpenSingleForm,
}) => {
  const dispatch = useAppDispatch();

  const { version } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const { loading } = useAppSelector((state) => state.userDataSlice);
  const { registrationAccessCode } = useAppSelector(
    (state) => state.registrationAccessCodeSlice
  );

  const initialValues: InitialValues = {
    [title]: '',
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (
      loading === 'succeeded' &&
      registrationAccessCode === RequestStatusCode.OK
    ) {
      setOpenSingleForm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Formik<InitialValues>
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values) => {
        const actionName = Object.keys(values)[0];
        const actionValue = values[actionName];

        const actionToAdd = createAction(actionName, actionValue);

        if (!actionToAdd) {
          return;
        }

        const updateData: MyCustomerUpdate = {
          version,
          actions: [actionToAdd],
        };

        dispatch(updateUserData(updateData));
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
  );
};

export default SingleFormField;

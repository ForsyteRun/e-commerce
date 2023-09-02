import { CustomerDraft, MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { createAction } from 'modules/UserProfile/helpers';
import { FC } from 'react';
import { updateUserData } from 'store/userDataSlice/thunks';
import { titleFields } from 'modules/UserProfile/constants';
import UserInfoSchema from '../../validation';
import EditInfoSingleField from './components/EditInfoSingleField';
import styles from './editInfo.module.scss';
import UserSimpleInfo from '../../types';

const initialValues: CustomerDraft = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
};

interface IEditInfo {
  setEdit: (value: boolean) => void;
}

const EditInfo: FC<IEditInfo> = ({ setEdit }) => {
  const dispatch = useAppDispatch();
  const { version } = useAppSelector((state) => state.userDataSlice.data);

  return (
    <Formik<CustomerDraft>
      initialValues={initialValues}
      validationSchema={UserInfoSchema}
      onSubmit={(values: CustomerDraft) => {
        const filteredValues: Record<string, string> = Object.fromEntries(
          Object.entries(values).filter(([, value]) => value !== undefined)
        );

        const { firstName, lastName, dateOfBirth, email } = filteredValues;

        const updateData: MyCustomerUpdate = {
          version: version || 0,
          actions: [
            createAction(UserSimpleInfo.firstName, firstName),
            createAction(UserSimpleInfo.lastName, lastName),
            createAction(UserSimpleInfo.dateOfBirth, dateOfBirth),
            createAction(UserSimpleInfo.email, email),
          ],
        };

        dispatch(updateUserData(updateData));
        setEdit(false);
      }}
    >
      {() => (
        <Form className={styles.form}>
          {titleFields.map((title: string) => (
            <EditInfoSingleField name={title} key={title} />
          ))}
          <Button variant="contained" type="submit">
            submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditInfo;

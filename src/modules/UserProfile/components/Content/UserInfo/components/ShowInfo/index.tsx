import React from 'react';
import { MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import updateUserData from 'modules/UserProfile/api';
import { RegisteredUserData } from 'types';
import { createAction } from 'modules/UserProfile/helpers';
import { IFieldData } from 'modules/UserProfile/types';
import FieldInfo from '../FieldInfo';
import {
  firstNameSchema,
  lastNameSchema,
  dateOfBirthSchema,
  emailSchema,
} from '../FieldInfo/validation';

const ShowInfo = () => {
  const dispatch = useAppDispatch();

  const { firstName, lastName, dateOfBirth, email, version } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const [userData, setUserData] = React.useState<
    Record<string, string | undefined>
  >({
    firstName,
  });

  React.useEffect(() => {
    const actionName = Object.keys(userData)[0];
    const actionValue = userData[actionName] as string;

    const actionToAdd = createAction(actionName, actionValue);

    if (!actionToAdd) {
      return;
    }

    const updateData: MyCustomerUpdate = {
      version,
      actions: [actionToAdd],
    };

    dispatch(updateUserData(updateData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const fieldInfoData: IFieldData[] = [
    { title: 'firstName', value: firstName, validation: firstNameSchema },
    { title: 'lastName', value: lastName, validation: lastNameSchema },
    {
      title: 'dateOfBirth',
      value: dateOfBirth,
      validation: dateOfBirthSchema,
    },
    { title: 'email', value: email, validation: emailSchema },
  ];

  return (
    <Stack sx={{ gap: '3rem' }}>
      {fieldInfoData.map((data: IFieldData) => (
        <FieldInfo
          key={data.title}
          title={data.title}
          value={data.value}
          setUserData={setUserData}
          validation={data.validation}
        />
      ))}
    </Stack>
  );
};

export default ShowInfo;

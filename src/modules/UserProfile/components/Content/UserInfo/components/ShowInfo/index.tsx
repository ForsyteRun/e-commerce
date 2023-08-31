import React from 'react';
import { MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import updateUserData from 'modules/UserProfile/api';
import { RegisteredUserData } from 'types';
import { createAction } from 'modules/UserProfile/helpers';
import { IFieldInfo } from 'modules/UserProfile/types';
import FieldInfo from '../FieldInfo';

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

  const fieldInfoData: IFieldInfo[] = [
    { title: 'first name', value: firstName },
    { title: 'last name', value: lastName },
    { title: 'date of birth', value: dateOfBirth },
    { title: 'email', value: email },
  ];

  return (
    <Stack sx={{ gap: '3rem' }}>
      {fieldInfoData.map((data: IFieldInfo) => (
        <FieldInfo
          key={data.title}
          title={data.title}
          value={data.value}
          setUserData={setUserData}
        />
      ))}
    </Stack>
  );
};

export default ShowInfo;

import { Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import React from 'react';
import { RegisteredUserData } from 'types';
import updateUserData from 'modules/UserProfile/api';
import { MyCustomerUpdate } from '@commercetools/platform-sdk';
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
    const updateData: MyCustomerUpdate = {
      version: version as number,
      actions: [
        {
          action: 'setFirstName',
          firstName: userData.firstName,
        },
      ],
    };

    dispatch(updateUserData(updateData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const fieldInfoData = [
    { title: 'first name', value: firstName },
    { title: 'last name', value: lastName },
    { title: 'date of birth', value: dateOfBirth },
    { title: 'email', value: email },
  ];

  return (
    <Stack sx={{ gap: '3rem' }}>
      {fieldInfoData.map((data) => (
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

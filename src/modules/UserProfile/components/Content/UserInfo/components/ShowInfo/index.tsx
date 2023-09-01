import { Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { IFieldData } from 'modules/UserProfile/types';
import React from 'react';
import { RegisteredUserData } from 'types';
import FieldInfo from '../FieldInfo';
import {
  dateOfBirthSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
} from '../FieldInfo/validation';

interface IShowInfo {
  // userFullData: CustomerDraft;
}

const ShowInfo: React.FC<IShowInfo> = () => {
  // const dispatch = useAppDispatch();

  // const [userData, setUserData] = React.useState<
  //   Record<string, string | undefined>
  // >({
  //   firstName,
  // });

  // const firstRender = useRef(true);

  // React.useEffect(() => {
  //   const actionName = Object.keys(userData)[0];
  //   const actionValue = userData[actionName] as string;

  //   const actionToAdd = createAction(actionName, actionValue);

  //   if (!actionToAdd) {
  //     return;
  //   }

  //   const updateData: MyCustomerUpdate = {
  //     version,
  //     actions: [actionToAdd],
  //   };

  //   if (firstRender.current) {
  //     firstRender.current = false;
  //   } else {
  //     dispatch(updateUserData(updateData));
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userData]);

  // React.useEffect(() => {
  //   const updateData: MyCustomerUpdate = {
  //     version,
  //     actions: [
  //       createAction('firstName', userFullData.firstName as string),
  //       createAction('lastName', userFullData.lastName as string),
  //       createAction('dateOfBirth', userFullData.dateOfBirth as string),
  //       createAction('email', userFullData.email as string),
  //     ],
  //   };

  //   dispatch(updateUserData(updateData));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userFullData]);

  // render
  const { firstName, lastName, dateOfBirth, email } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

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
          // setUserData={setUserData}
          validation={data.validation}
        />
      ))}
    </Stack>
  );
};

export default ShowInfo;

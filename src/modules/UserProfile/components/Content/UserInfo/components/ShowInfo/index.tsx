import { Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { IFieldData } from 'modules/UserProfile/types';
import { RegisteredUserData } from 'types';
import FieldInfo from '../FieldInfo';
import {
  dateOfBirthSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
} from '../FieldInfo/validation';

const ShowInfo = () => {
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
          validation={data.validation}
        />
      ))}
    </Stack>
  );
};

export default ShowInfo;

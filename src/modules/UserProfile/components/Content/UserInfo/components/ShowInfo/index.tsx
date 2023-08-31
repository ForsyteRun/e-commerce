import { Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import FieldInfo from '../FieldInfo';

const ShowInfo = () => {
  const { firstName, lastName, dateOfBirth, email } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  const fieldInfoData = [
    { title: 'first name', value: firstName },
    { title: 'last name', value: lastName },
    { title: 'date of birth', value: dateOfBirth },
    { title: 'email', value: email },
  ];

  return (
    <Stack sx={{ gap: '3rem' }}>
      {fieldInfoData.map((data) => (
        <FieldInfo key={data.title} title={data.title} value={data.value} />
      ))}
    </Stack>
  );
};

export default ShowInfo;

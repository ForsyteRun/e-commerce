import { Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import FieldInfo from '../FieldInfo';

const ShowInfo = () => {
  const { firstName, lastName, dateOfBirth, email } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  return (
    <Stack sx={{ gap: '3rem' }}>
      <FieldInfo title="first name" value={firstName} />
      <FieldInfo title="last name" value={lastName} />
      <FieldInfo title="date of birth" value={dateOfBirth} />
      <FieldInfo title="email" value={email} />
    </Stack>
  );
};

export default ShowInfo;

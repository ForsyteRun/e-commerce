import { Stack } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { RegisteredUserData } from 'types';
import FieldInfo from '../FieldInfo';

const ShowInfo = () => {
  const { firstName, lastName, dateOfBirth } = useAppSelector(
    (state) => state.userDataSlice.data
  ) as RegisteredUserData;

  return (
    <Stack sx={{ gap: '3rem' }}>
      <FieldInfo value={firstName} />
      <FieldInfo value={lastName} />
      <FieldInfo value={dateOfBirth} />
    </Stack>
  );
};

export default ShowInfo;

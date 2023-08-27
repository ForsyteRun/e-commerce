import { useAppSelector } from 'hooks/useRedux';

const UserProfile = () => {
  const { data } = useAppSelector((state) => state.userDataSlice);
  return <div>{data.authenticationMode}</div>;
};

export default UserProfile;

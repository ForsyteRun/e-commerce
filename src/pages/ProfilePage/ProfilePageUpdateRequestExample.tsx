import {
  MyCustomerSetFirstNameAction,
  MyCustomerSetLastNameAction,
} from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { fetchUserDataByRefreshToken } from 'store/userDataSlice/thunks';
import updateUserData from './api/updateUserData';

const ProfilePageUpdateRequestExample = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userDataSlice.data);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    dispatch(fetchUserDataByRefreshToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData.version) {
      setVersion(userData.version);
    }
  }, [userData]);

  const changeLastName: MyCustomerSetLastNameAction = {
    action: 'setLastName',
    lastName: 'Smith',
  };

  const changeFirstName: MyCustomerSetFirstNameAction = {
    action: 'setFirstName',
    firstName: 'John',
  };

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(
          updateUserData({
            version,
            actions: [changeLastName, changeFirstName],
          })
        );
      }}
    >
      Click
    </button>
  );
};

export default ProfilePageUpdateRequestExample;

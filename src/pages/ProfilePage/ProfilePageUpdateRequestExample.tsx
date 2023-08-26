import {
  MyCustomerSetFirstNameAction,
  MyCustomerSetLastNameAction,
} from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { fetchUserDataByRefreshToken } from 'store/userDataSlice/thunks';
import { PathNames } from 'types';
import updateUserData from './api/updateUserData';

const ProfilePageUpdateRequestExample = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.userDataSlice);
  const { authenticationMode, version } = useAppSelector(
    (state) => state.userDataSlice.data
  );
  const [dataVersion, setDataVersion] = useState(0);

  useEffect(() => {
    if (loading !== 'pending' && authenticationMode === 'Password') {
      dispatch(fetchUserDataByRefreshToken());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authenticationMode !== 'Password') {
      navigate(PathNames.index);
    }

    if (version) {
      setDataVersion(version);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticationMode, version]);

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
            version: dataVersion,
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

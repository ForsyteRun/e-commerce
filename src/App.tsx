import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import identificateUserOnAppStart from 'helpers/identificateUserOnAppStart';
import Header from 'components/Header';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

// import fetchSingleProductData from 'store/singleProductDataSlice/fetchSingleProductData';

const App = () => {
  const dispatch = useAppDispatch();
  const { authenticationMode } = useAppSelector(
    (state) => state.userDataSlice.data
  );

  useEffect(() => {
    identificateUserOnAppStart(dispatch, authenticationMode);
    // dispatch(fetchSingleProductData('0c91d266-6f0e-4203-9aaa-e5c2a00418be'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;

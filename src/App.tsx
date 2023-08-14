import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import apiRoot from './services/sdkClient/apiRoot';

function App() {
  apiRoot
    .customers()
    .get()
    .execute()
    .then((data) => console.log(data));

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

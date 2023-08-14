import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import apiRoot from './services/sdkClient/apiRoot';

function App() {
  apiRoot
    .productProjections()
    .get()
    .execute()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

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

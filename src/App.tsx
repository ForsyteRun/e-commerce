import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Registration from './modules/Registration';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Registration />
      </main>
    </>
  );
}

export default App;

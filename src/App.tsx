import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

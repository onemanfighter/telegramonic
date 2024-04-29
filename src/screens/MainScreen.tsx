import { Outlet } from 'react-router-dom';

const MainScreen = () => {
  return (
    <div>
      <h1>Main Screen</h1>
      <Outlet />
    </div>
  );
};

export default MainScreen;

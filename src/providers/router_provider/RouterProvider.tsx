import { RouterProvider } from 'react-router-dom';
import { publicRouter } from '@router';

const AppRouterProvider = () => {
  return <RouterProvider router={publicRouter} />;
};

export default AppRouterProvider;

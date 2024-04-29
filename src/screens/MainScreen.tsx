import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const MainScreen = () => {
  return (
    <Box>
      <h1>Main Screen</h1>
      <Outlet />
    </Box>
  );
};

export default MainScreen;

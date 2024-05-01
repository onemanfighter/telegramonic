import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './navigation';
import { Footer } from './footer';

const MainScreen = () => {
  return (
    <Box
      flex={1}
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      scrollBehavior={'smooth'}
    >
      <Navigation />
      <Box minHeight={'2xl'} bgColor={'grey.200'}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainScreen;

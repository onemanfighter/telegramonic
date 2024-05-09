import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './navigation';
import { Footer } from './footer';
import { BreadcrumbComponent } from './breadcrumb';

const MainScreen = () => {
  const location = useLocation();

  const isHomeLocation = location.pathname !== '/home';
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
      {isHomeLocation && <BreadcrumbComponent />}
      <Box minHeight={'2xl'} bgColor={'grey.200'}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainScreen;

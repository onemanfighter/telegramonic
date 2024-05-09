import { SearchStack } from '@components';
import { HomeHeaderComponent } from './component';
import { Box } from '@chakra-ui/react';

const Home = () => {
  const onSearchClick = (searchText: string) => {
    console.log(searchText);
  };

  return (
    <Box width={'100%'}>
      <HomeHeaderComponent />
      <SearchStack
        onSearchClick={() => {
          onSearchClick('searchText');
        }}
      />
    </Box>
  );
};

export default Home;

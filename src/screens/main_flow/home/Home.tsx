import { SearchStack } from '@components';
import { BrowseOurCategories, HomeHeaderComponent } from './component';
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
      <BrowseOurCategories />
    </Box>
  );
};

export default Home;

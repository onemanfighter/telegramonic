import { Box } from '@chakra-ui/react';
import { SearchProps } from './types';
import { SearchStack } from '@components';

const Search = (props: SearchProps) => {
  const onSearchClick = () => {
    console.log('Search button clicked');
  };
  return (
    <Box flex={1} flexDirection={'column'} padding={2}>
      <SearchStack onSearchClick={onSearchClick} />
    </Box>
  );
};

export default Search;

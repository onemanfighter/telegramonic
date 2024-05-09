import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { SearchCategoryItems } from '../../screens/main_flow/search/constants';
import { SearchStackProps } from './types';

const SearchStack = ({ onSearchClick }: SearchStackProps) => {
  const { t } = useTranslation();
  return (
    <Box
      flex={1}
      flexDirection={'column'}
      margin={2}
      alignContent={'center'}
      textShadow={'lg'}
      borderRadius={'lg'}
      boxShadow={'lg'}
      outline={'1px solid #00000035'}
    >
      <HStack
        marginX={8}
        justifyContent={'center'}
        padding={2}
        margin={2}
        zIndex={0}
      >
        <InputGroup width={'lg'}>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder={t('Search.searchInputPlaceholder')} />
        </InputGroup>
        <Menu matchWidth>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            width={'sm'}
            zIndex={0}
          >
            {t('Search.searchCategory.placeholder')}
          </MenuButton>
          <MenuList zIndex={0}>
            {SearchCategoryItems.map((category, index) => (
              <MenuItem key={index}>{t(category.stringKey)}</MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Button
          variant={'outline'}
          onClick={onSearchClick}
          colorScheme="blue"
          width={'sm'}
        >
          {t('Search.searchButton')}
        </Button>
      </HStack>
    </Box>
  );
};

export default SearchStack;

import {
  Box,
  Button,
  HStack,
  Hide,
  IconButton,
  Image,
  Show,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MenuPopover } from '@components';
import { NavBarButtons } from './components';
import { FaMoon, FaSearch, FaSun } from 'react-icons/fa';

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      opacity={0.5}
      flex={1}
      display={'flex'}
      bgColor={'blue.600'}
      flexDirection={'row'}
      boxShadow={'2xl'}
      paddingX={6}
      paddingY={2}
      position={'sticky'}
      top={0}
      justifyContent={'space-between'}
      alignItems={'center'}
      zIndex={1000}
    >
      <Button
        as={Link}
        height={12}
        to="/"
        variant={'outline'}
        colorScheme="red"
        bgColor="white"
      >
        <Image
          width={220}
          src={require('@assets/images/LogoNoBackground.png')}
          alt="logo"
          loading="lazy"
        />
      </Button>
      <Hide below="md">
        <NavBarButtons fullWidth={false} />
      </Hide>
      <HStack spacing={4}>
        <IconButton
          width={12}
          as={Link}
          to="/search"
          variant={'ghost'}
          icon={<FaSearch size={24} color="white" />}
          aria-label={'search-icon-button'}
        />
        <IconButton
          width={12}
          onClick={toggleColorMode}
          variant={'ghost'}
          icon={
            colorMode === 'light' ? (
              <FaMoon size={24} color="white" />
            ) : (
              <FaSun size={24} color="yellow" />
            )
          }
          aria-label={colorMode === 'light' ? 'light-mode' : 'dark-mode'}
        />
      </HStack>
      <Show below="md">
        <MenuPopover
          triggerComponent={
            <IconButton
              icon={<FiMenu />}
              fontSize={'lg'}
              marginRight={2}
              color={useColorModeValue('black', 'white')}
              transition="all 0.2s"
              bgColor={'blue.100'}
              aria-label="nav-menu"
            />
          }
        >
          <NavBarButtons fullWidth />
        </MenuPopover>
      </Show>
    </Box>
  );
};

export default Navigation;

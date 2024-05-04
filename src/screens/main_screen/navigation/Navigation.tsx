import {
  Box,
  Button,
  Hide,
  IconButton,
  Image,
  Show,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MenuPopover } from '@components';
import { NavBarButtons } from './components';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      opacity={0.5}
      flex={1}
      display={'flex'}
      bgColor={'blue.500'}
      flexDirection={'row'}
      boxShadow={'2xl'}
      padding={2}
      position={'sticky'}
      top={0}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
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
      </Box>
      <Hide below="md">
        <NavBarButtons fullWidth={false} />
      </Hide>
      <IconButton
        width={12}
        onClick={toggleColorMode}
        variant={'outline'}
        icon={
          colorMode === 'light' ? (
            <FaMoon color="black" />
          ) : (
            <FaSun color="yellow" />
          )
        }
        aria-label={colorMode === 'light' ? 'light-mode' : 'dark-mode'}
        color={colorMode === 'light' ? 'white.500' : 'black.500'}
      />
      <Show below="md">
        <MenuPopover
          triggerComponent={
            <IconButton
              icon={<FiMenu />}
              fontSize={'lg'}
              marginRight={2}
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

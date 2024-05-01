import {
  Box,
  Button,
  Divider,
  Hide,
  IconButton,
  Image,
  Show,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MenuPopover } from '@components';
import { NavBarButtons } from './components';

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <Box
      opacity={0.5}
      flex={1}
      display={'flex'}
      bgColor="blue.400"
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
          _hover={{ bg: 'blue.200' }}
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
      <Show below="md">
        <MenuPopover
          triggerComponent={
            <IconButton
              icon={<FiMenu />}
              fontSize={'lg'}
              marginRight={2}
              transition="all 0.2s"
              bgColor={'blue.100'}
              color={'gray.500'}
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

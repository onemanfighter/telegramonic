import { Button, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { NavigationButton } from '../types';
import OthersButton from './OthersButton';
import {
  boxProps,
  buttonFullWidthProps,
  buttonNonFullWidthProps,
} from './constants';

const NavBarButtons = ({ fullWidth }: { fullWidth: boolean }) => {
  const { t } = useTranslation();
  const navigationList = fullWidth ? NAVIGATION : NAVIGATION.slice(0, 5);

  return (
    <Box
      {...(fullWidth && boxProps)}
      flexDirection={fullWidth ? 'column' : 'row'}
    >
      {navigationList.map((navItem: NavigationButton) => {
        return !navItem.subNavigations ? (
          <Button
            {...(fullWidth ? buttonFullWidthProps : buttonNonFullWidthProps)}
            fontSize={'lg'}
            as={Link}
            transition="all 0.2s"
            to={navItem.path}
            color="black"
            textColor="white"
            _hover={{
              bgColor: 'white',
              textColor: 'black',
              borderColor: 'black',
            }}
            variant="ghost"
            key={navItem.titleStringKey}
          >
            {t(`${navItem.titleStringKey}`)}
          </Button>
        ) : (
          <Button
            {...(fullWidth ? buttonFullWidthProps : buttonNonFullWidthProps)}
            fontSize={'lg'}
            as={Link}
            transition="all 0.2s"
            textColor="white"
            _hover={{
              bgColor: 'white',
              textColor: 'black',
              borderColor: 'black',
            }}
            variant="ghost"
            to={navItem.path}
            key={navItem.titleStringKey}
            rightIcon={<FiChevronDown />}
          >
            {t(`${navItem.titleStringKey}`)}
          </Button>
        );
      })}
      {!fullWidth && <OthersButton />}
    </Box>
  );
};

export default NavBarButtons;

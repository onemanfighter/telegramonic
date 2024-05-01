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
            bgGradient={'linear(to-r, blue.200, gray.500)'}
            to={navItem.path}
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
            bgGradient={'linear(to-r, blue.200, gray.500)'}
            to={navItem.path}
            key={navItem.titleStringKey}
            rightIcon={<FiChevronDown />}
          >
            {t(`${navItem.titleStringKey}`)}
          </Button>
        );
      })}
      {!fullWidth && <OthersButton fullWidth />}
    </Box>
  );
};

export default NavBarButtons;

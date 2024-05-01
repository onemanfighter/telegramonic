import { Button, Box } from '@chakra-ui/react';
import { MenuPopover } from '@components';
import { t } from 'i18next';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { NavigationButton } from '../types';
import { boxProps, buttonNonFullWidthProps } from './constants';

const OthersButton = ({ fullWidth }: { fullWidth: boolean }) => {
  return (
    <MenuPopover
      triggerComponent={
        <Button
          {...buttonNonFullWidthProps}
          fontSize={'lg'}
          transition="all 0.2s"
          bgGradient={'linear(to-r, blue.200, gray.500)'}
          rightIcon={<FiChevronDown />}
        >
          {t(`Navigation.others`)}
        </Button>
      }
    >
      <Box {...boxProps} flexDirection={'column'}>
        {NAVIGATION.slice(5).map((navItem: NavigationButton) => {
          return (
            <Button
              fontSize={'lg'}
              marginY={1}
              as={Link}
              transition="all 0.2s"
              bgGradient={'linear(to-r, blue.200, gray.500)'}
              to={navItem.path}
              key={navItem.titleStringKey}
            >
              {t(`${navItem.titleStringKey}`)}
            </Button>
          );
        })}
      </Box>
    </MenuPopover>
  );
};

export default OthersButton;

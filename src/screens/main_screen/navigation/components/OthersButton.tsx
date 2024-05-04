import { Button, Box } from '@chakra-ui/react';
import { MenuPopover } from '@components';
import { t } from 'i18next';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { NavigationButton } from '../types';
import { boxProps, buttonNonFullWidthProps } from './constants';

const OthersButton = () => {
  return (
    <MenuPopover
      triggerComponent={
        <Button
          {...buttonNonFullWidthProps}
          fontSize={'lg'}
          transition="all 0.2s"
          variant={'outline'}
          textColor="white"
          _hover={{
            bgColor: 'white',
            textColor: 'black',
            borderColor: 'black',
          }}
          rightIcon={<FiChevronDown />}
          transform="all 0.2s"
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
              variant={'outline'}
              color="black"
              bgColor={'white'}
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

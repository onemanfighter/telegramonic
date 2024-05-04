import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavLinkButtonProps } from './types';

const NavLinkButton = ({ titleStringKey, path }: NavLinkButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      margin={1}
      variant="outline"
      size={'sm'}
      as={Link}
      to={path}
      _hover={{
        bgColor: 'white',
        textColor: 'blue.800',
        borderColor: 'blue.800',
      }}
      bgColor={'white'}
      textColor={'blue.400'}
      transition="all 0.2s"
    >
      {t(`${titleStringKey}`)}
    </Button>
  );
};

export default NavLinkButton;

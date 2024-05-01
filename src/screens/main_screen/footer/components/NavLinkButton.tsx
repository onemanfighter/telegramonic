import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavLinkButtonProps } from './types';

const NavLinkButton = ({ titleStringKey, path }: NavLinkButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button margin={1} variant="outline" size={'sm'} as={Link} to={path}>
      {t(`${titleStringKey}`)}
    </Button>
  );
};

export default NavLinkButton;

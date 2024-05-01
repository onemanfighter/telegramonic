import { Button, ButtonGroup, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialButtonStack = () => {
  const { t } = useTranslation();
  return (
    <HStack>
      <ButtonGroup variant="outline" spacing="6" gap={2}>
        <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
          {t('Footer.social.facebook')}
        </Button>
        <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
          {t('Footer.social.twitter')}
        </Button>
        <Button colorScheme="pink" leftIcon={<FaInstagram />}>
          {t('Footer.social.instagram')}
        </Button>
      </ButtonGroup>
    </HStack>
  );
};

export default SocialButtonStack;

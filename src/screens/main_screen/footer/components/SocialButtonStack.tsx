import { Button, ButtonGroup, HStack, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialButtonStack = () => {
  const { t } = useTranslation();
  return (
    <HStack>
      <ButtonGroup variant="outline" spacing="6" gap={2}>
        <IconButton
          color={'blue'}
          bgColor={'white'}
          icon={<FaFacebook />}
          aria-label="facebook-button"
        ></IconButton>
        <IconButton
          color={'blue.500'}
          bgColor={'white'}
          icon={<FaTwitter />}
          aria-label="twitter-button"
        ></IconButton>
        <IconButton
          color={'pink.600'}
          bgColor={'white'}
          icon={<FaInstagram />}
          aria-label="instagram-button"
        ></IconButton>
      </ButtonGroup>
    </HStack>
  );
};

export default SocialButtonStack;

import {
  AbsoluteCenter,
  Box,
  Divider,
  Grid,
  GridItem,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as reactRouterLink } from 'react-router-dom';
import { NavLinkButton, SocialButtonStack } from './components';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      height={'100'}
      opacity={0.5}
      flex={1}
      bgColor="blue.100"
      display={'flex'}
      padding={4}
      flexDirection={'column'}
    >
      <Divider marginBottom={5} />
      <VStack>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          flexDirection={'row'}
          justifyContent={'center'}
        >
          <GridItem colSpan={1}>
            <Text fontSize={'md'} transition="all 0.2s">
              {t('Footer.websiteText')}
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize={'large'} color="blue" paddingStart={3}>
              {t('Footer.media.title')}
            </Text>
            <NavLinkButton titleStringKey={'Footer.media.top'} path={'/top'} />
            <Divider />
            <NavLinkButton
              titleStringKey={'Footer.media.channels'}
              path={'/channels'}
            />
            <NavLinkButton
              titleStringKey={'Footer.media.groups'}
              path={'/groups'}
            />
            <NavLinkButton
              titleStringKey={'Footer.media.bots'}
              path={'/bots'}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize={'large'} color="blue" paddingStart={3}>
              {t('Footer.reachUs.title')}
            </Text>
            <NavLinkButton
              titleStringKey={'Footer.reachUs.feature'}
              path={'/feature'}
            />
            <Divider />
            <NavLinkButton
              titleStringKey={'Footer.reachUs.contact'}
              path={'/contact'}
            />
            <NavLinkButton
              titleStringKey={'Footer.reachUs.about'}
              path={'/about'}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize={'large'} color="blue" paddingStart={3}>
              {t('Footer.staticOthers.title')}
            </Text>
            <NavLinkButton
              titleStringKey={'Footer.staticOthers.privacy'}
              path={'/privacy'}
            />
            <NavLinkButton
              titleStringKey={'Footer.staticOthers.terms'}
              path={'/terms'}
            />
            <NavLinkButton
              titleStringKey={'Footer.staticOthers.faq'}
              path={'/faq'}
            />
          </GridItem>
        </Grid>
        <Box paddingY={2}>
          <Divider />
          <Text fontSize={'md'} color="blue.600" paddingStart={3}>
            {t('Footer.disclaimer')}
            <Link
              as={reactRouterLink}
              to="/contact"
              color={'teal'}
              fontStyle={'oblique'}
              paddingStart={2}
            >
              {t('Footer.reachUs.contact')}
            </Link>
          </Text>
          <Divider />
        </Box>
        <Box>
          <SocialButtonStack />
        </Box>
      </VStack>
    </Box>
  );
};

export default Footer;

import {
  Box,
  Divider,
  Grid,
  GridItem,
  Hide,
  Link,
  Show,
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
      opacity={0.5}
      flex={1}
      bgColor="blue.300"
      display={'flex'}
      padding={4}
      flexDirection={'column'}
    >
      <VStack>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <Hide below="md">
              <Text fontSize={'md'} color="black" transition="all 0.2s">
                {t('Footer.websiteText')}
              </Text>
            </Hide>
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize={'large'} color="blue.900" paddingStart={3}>
              {t('Footer.media.title')}
            </Text>
            <Divider />
            <NavLinkButton titleStringKey={'Footer.media.top'} path={'/top'} />
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
            <Text fontSize={'large'} color="blue.900" paddingStart={3}>
              {t('Footer.reachUs.title')}
            </Text>
            <Divider />
            <NavLinkButton
              titleStringKey={'Footer.reachUs.feature'}
              path={'/feature'}
            />
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
            <Text fontSize={'large'} color="blue.900" paddingStart={3}>
              {t('Footer.staticOthers.title')}
            </Text>
            <Divider />
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
          <Show below="md">
            <Divider />
            <Text
              fontSize={'sm'}
              color="black"
              transition="all 0.2s"
              paddingStart={3}
              paddingBottom={10}
            >
              {t('Footer.websiteText')}
            </Text>
          </Show>
          <Divider />
          <Text fontSize={'md'} color="black" paddingStart={3}>
            {t('Footer.disclaimer')}
            <Link
              as={reactRouterLink}
              to="/contact"
              color={'blue'}
              fontStyle={'oblique'}
              paddingStart={2}
            >
              {t('Footer.reachUs.contact')}
            </Link>
          </Text>
          <Divider />
        </Box>
        <SocialButtonStack />
        <Divider />
        <Text fontSize={'md'} color="black" paddingStart={3}>
          {t('Footer.copyRight')}
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;

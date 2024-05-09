import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react';
import { categories } from './constants';
import { useTranslation } from 'react-i18next';

const BrowseOurCategories = () => {
  const { t } = useTranslation();
  return (
    <Box width={'100%'} p={5}>
      <Box px={8} mb={8}>
        <Divider />
        <Text fontSize={'x-large'} fontWeight={'bold'} colorScheme="black">
          {t('MainHomeScreen.browseOurCategories')}
        </Text>
        <Divider />
      </Box>
      <Flex flexWrap={'wrap'} justifyContent={'space-evenly'}>
        {categories.map((category) => (
          <Box
            key={category.name}
            m={5}
            px={2}
            height={'200'}
            width={'200px'}
            background={require('@assets/images/LogoNoBackground.png')}
            boxShadow={'md'}
            borderRadius={10}
            display={'flex'}
            border={'1px solid black'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text
              fontSize={'md'}
              fontWeight={'bold'}
              textAlign={'center'}
              colorScheme="black"
            >
              {category.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BrowseOurCategories;

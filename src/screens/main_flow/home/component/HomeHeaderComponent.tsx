import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const HomeHeaderComponent = () => {
  const { t } = useTranslation();
  return (
    <Box width={'100%'}>
      <Box
        flex={1}
        flexDirection={'column'}
        justifyContent={'center'}
        border={'1px solid #00000035'}
        borderRadius={'lg'}
        margin={2}
        padding={2}
      >
        <Text fontSize={'x-large'} fontWeight={'600'} textAlign={'center'}>
          {t('Home.header.title')}
        </Text>
        <Text fontSize={'large'} fontWeight={'400'} textAlign={'center'}>
          {t('Home.header.subTitle')}
        </Text>
      </Box>
    </Box>
  );
};

export default HomeHeaderComponent;

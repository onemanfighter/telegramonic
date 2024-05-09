import { Box, Breadcrumb, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbComponent = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const onBreadcrumbClick = () => {
    console.log('Breadcrumb clicked');
  };

  const paths = location.pathname.split('/').filter((path) => path !== '');
  return (
    <Box
      display={'flex'}
      paddingX={'12'}
      paddingY={'2'}
      bgColor={'grey.500'}
      border={'1px solid grey'}
      borderRadius={'lg'}
      marginX={4}
      marginTop={2}
      flexDirection={'row'}
      justifyContent={'start'}
    >
      <Button
        as={Link}
        to={`/home`}
        onClick={onBreadcrumbClick}
        size={'sm'}
        variant={'outline'}
        colorScheme="blue"
        marginX={1}
      >
        {t('home')}
      </Button>
      <Text
        fontSize={'large'}
        fontWeight={'400'}
        textAlign={'center'}
        marginX={1}
      >
        {' / '}
      </Text>
      <Breadcrumb separator={' / '}>
        {paths.map((path, index) => (
          <Button
            key={index}
            onClick={onBreadcrumbClick}
            size={'sm'}
            as={Link}
            to={`/${path}`}
            variant={'outline'}
            colorScheme="blue"
            marginX={1}
          >
            {path}
          </Button>
        ))}
      </Breadcrumb>
    </Box>
  );
};

export default BreadcrumbComponent;

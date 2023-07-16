import { Box, Flex, Center, Text, Heading } from '@chakra-ui/react';
import SeeProductButton from '../../shared/SeeProductButton';

const Banner = ({ heroData }) => {
  const isNewProduct = () => {
    return heroData.new ? <Heading as="h3">New Product</Heading> : null;
  };

  return (
    <Center
      h="300px"
      w="100%"
      bgImage={`url(${heroData.image.mobile.path})`}
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Flex direction="column">
        {isNewProduct()}
        <Heading as="h2" size={'2xl'}>
          {heroData.headline}
        </Heading>
        <Text>{heroData.action}</Text>
        <SeeProductButton />
      </Flex>
    </Center>
  );
};

export default Banner;

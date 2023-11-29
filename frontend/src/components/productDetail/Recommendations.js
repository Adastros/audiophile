import { Flex, Box, Heading } from '@chakra-ui/react';
import RecommendedProduct from './RecommendedProduct';
import headingStyles from '../../theme/headingStyles';

const Recommendations = ({ recommendations, routes, setQuantity }) => {
  const listRecommendedProducts = () => {
    return Object.keys(recommendations).map((product, i) => {
      return (
        <RecommendedProduct
          key={`${recommendations[product].name
            .split(' ')
            .join('')}RecommendedProduct`}
          product={recommendations[product]}
          route={routes[`product${i + 1}`]}
          setQuantity={setQuantity}
        />
      );
    });
  };

  return (
    <Box w="100%">
      <Heading
        w="100%"
        marginBottom={{ base: '2.5rem', md: '3.5rem', lg: '4rem' }}
        textAlign="center"
        {...headingStyles.productDetailSection}
      >
        YOU MAY ALSO LIKE
      </Heading>
      <Flex
        w="100%"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
        gap={{ base: '3.5rem', md: '0.6875rem', lg: '1.875rem' }}
      >
        {listRecommendedProducts()}
      </Flex>
    </Box>
  );
};

export default Recommendations;

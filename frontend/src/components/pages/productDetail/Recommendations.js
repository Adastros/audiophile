import { Box, Heading } from '@chakra-ui/react';
import RecommendedProduct from './RecommendedProduct';
import headingStyles from '../../../theme/headingStyles';

const Recommendations = ({ recommendations, routes }) => {
  const listRecommendedProducts = () => {
    return Object.keys(recommendations).map((product, i) => {
      return (
        <RecommendedProduct
          key={`recommended-${recommendations[product].name
            .split(' ')
            .join('-')}`}
          product={recommendations[product]}
          route={routes[`product${i + 1}`]}
        />
      );
    });
  };

  return (
    <Box w={{ base: '327px' }}>
      <Heading
        w="100%"
        marginBottom="40px"
        textAlign="center"
        {...headingStyles.productDetailSection}
      >
        YOU MAY ALSO LIKE
      </Heading>
      {listRecommendedProducts()}
    </Box>
  );
};

export default Recommendations;

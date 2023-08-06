import { Heading } from '@chakra-ui/react';
import headingStyles from '../../../theme/headingStyles';

const ProductName = ({ productName }) => {
  return (
    <Heading
      as="h2"
      w={{ base: '327px', md: '527px', lg: '445px' }}
      {...headingStyles.mdHeading}
    >
      {productName}
    </Heading>
  );
};

export default ProductName;

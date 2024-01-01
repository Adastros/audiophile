import { SimpleGrid, GridItem, VStack, Heading } from '@chakra-ui/react';
import AddressInput from './AddressInput';
import ZipCodeInput from './ZipCodeInput';
import CityInput from './CityInput';
import StateProvinceInput from './StateProvinceInput';
import CountryInput from './CountryInput';
import headingStyles from '../../theme/headingStyles';

const ShippingInfo = ({ errors, register }) => {
  return (
    <VStack as="section" w="100%" align="flex-start" gap="1rem">
      <Heading {...headingStyles.checkoutSection}>SHIPPING INFO</Heading>
      <SimpleGrid
        w="100%"
        gridTemplate={{
          base: `"a a"
                 "b b"
                 "c c"
                 "d d"
                 "e e"`,
          md: `"a a"
               "b c"
               "d e"`,
        }}
        columns={{ base: '1', md: '2' }}
        rowGap="1.5rem"
        columnGap="1rem"
      >
        <GridItem area="a">
          <AddressInput errors={errors} register={register} />
        </GridItem>
        <GridItem area="b">
          <ZipCodeInput errors={errors} register={register} />
        </GridItem>
        <GridItem area="c">
          <CityInput errors={errors} register={register} />
        </GridItem>
        <GridItem area="d">
          <StateProvinceInput errors={errors} register={register} />
        </GridItem>
        <GridItem area="e">
          <CountryInput errors={errors} register={register} />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default ShippingInfo;

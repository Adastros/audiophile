import { SimpleGrid, VStack, Heading } from '@chakra-ui/react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PhoneNumberInput from './PhoneNumberInput';
import headingStyles from '../../theme/headingStyles';

const BillingDetails = ({ errors, register }) => {
  return (
    <VStack as="section" w="100%" align="flex-start" gap="1rem">
      <Heading as="h2" {...headingStyles.checkoutSection}>
        BILLING DETAILS
      </Heading>
      <SimpleGrid
        w="100%"
        columns={{ base: '1', md: '2' }}
        rowGap="1.5rem"
        columnGap="1rem"
      >
        <NameInput errors={errors} register={register} />
        <EmailInput errors={errors} register={register} />
        <PhoneNumberInput errors={errors} register={register} />
      </SimpleGrid>
    </VStack>
  );
};

export default BillingDetails;

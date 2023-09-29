import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactSVG } from 'react-svg';

const CashOnDeliveryMessage = ({ checkoutData }) => {
  const iconUrl = checkoutData.icon.cashOnDelivery.path;
  const iconLabel = checkoutData.icon.cashOnDelivery.aria.label;
  const message = checkoutData.message;

  return (
    <HStack w="100%" gap={{ base: '1rem', md: '2rem' }}>
      <Icon
        as={ReactSVG}
        src={iconUrl}
        aria-label={iconLabel}
        h="auto"
        w="min-content"
        marginTop={{ base: '0.5rem', md: '0' }}
        alignSelf={{ base: 'flex-start', md: 'center' }}
      />
      <Text textStyle="productPreviewDescription">{message}</Text>
    </HStack>
  );
};

export default CashOnDeliveryMessage;

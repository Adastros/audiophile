import { Button, Image } from '@chakra-ui/react';
import { awaitModalBody, padModalBody } from '../../../utils/helper';

const ExclamationButton = ({
  exclamationIconUrl,
  isCartEmpty,
  onCartModalOpen,
}) => {
  const handleButtonClick = async () => {
    const modalBody = await awaitModalBody();
    padModalBody(modalBody);
  };

  return (
    <Button
      h="1rem"
      w="1rem"
      minWidth="1rem"
      padding="0"
      visibility={isCartEmpty ? 'visible' : 'hidden'}
      position="absolute"
      top="calc(50% - 1.2rem)"
      right={{ base: '1.6rem', md: '-0.9rem' }}
      zIndex="10"
      borderRadius="50%"
      backgroundColor="white"
      _hover={{ opacity: '0.75' }}
      onClick={handleButtonClick}
    >
      <Image
        src={exclamationIconUrl}
        alt=""
        h="100%"
        w="100%"
        aria-hidden="true"
        borderRadius="50%"
        backgroundColor="white"
        onClick={onCartModalOpen}
      />
    </Button>
  );
};

export default ExclamationButton;

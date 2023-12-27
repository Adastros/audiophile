import { Button, Image } from '@chakra-ui/react';
import { awaitModalBody, padModalBody } from '../../utils/helper';

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
      className="exclamation"
      h="1rem"
      w="1rem"
      minWidth="1rem"
      padding="0"
      visibility={isCartEmpty ? 'visible' : 'hidden'}
      position="absolute"
      top="calc(50% - 0.95rem)"
      right={{ base: '1.9rem', md: '-0.5rem' }}
      zIndex="10"
      borderRadius="50%"
      backgroundColor="white"
      onClick={handleButtonClick}
    >
      <Image
        src={exclamationIconUrl}
        alt=""
        h="100%"
        w="100%"
        aria-hidden="true"
        borderRadius="50%"
        onClick={onCartModalOpen}
      />
    </Button>
  );
};

export default ExclamationButton;

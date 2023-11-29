import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import ProductCategories from '../productCategories/ProductCategories';

const MenuModal = ({ menuModal }) => {
  return (
    <Modal
      isOpen={menuModal.isMenuModalOpen}
      onClose={menuModal.onMenuModalClose}
      scrollBehavior="inside"
      variant="menu"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <ProductCategories menuModal={menuModal} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MenuModal;

import { IconButton } from '@chakra-ui/react';
import CartIcon from './CartIcon';

const CartIconButton = ({ headerData, onCartModalOpen, menuModal }) => {
  const cartIconAriaLabel = headerData.icon.cart.aria.label;
  const cartIconUrl = headerData.icon.cart.path;

  // Waits for the modal body to exist in DOM.
  const awaitModalBody = async () => {
    return new Promise(resolve => {
      if (document.querySelector('#modal-body')) {
        return resolve(document.querySelector('#modal-body'));
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector('#modal-body')) {
          resolve(document.querySelector('#modal-body'));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        subtree: true,
        childList: true,
      });
    });
  };

  const onCartClick = async () => {
    if (menuModal) menuModal.onMenuModalClose();

    onCartModalOpen();

    // Padding right is added when the modal body overflows to space the cart items from
    // the scrollbar.
    const modalBody = await awaitModalBody();
    if (modalBody) {
      if (modalBody.scrollHeight > modalBody.offsetHeight) {
        modalBody.style.padding = '0 0.75rem 0 0';
      }
    }
  };

  return (
    <IconButton
      id="cart-button"
      className="iconHover"
      aria-label={cartIconAriaLabel}
      icon={<CartIcon cartIconUrl={cartIconUrl} />}
      onClick={onCartClick}
      h="1.25rem"
      w="1.4375rem"
      minW="0"
      margin="0"
      padding="0"
    />
  );
};

export default CartIconButton;

import { createPortal } from 'react-dom';

// import PropTypes from 'prop-types';

import { ModalOverlay, ModalView } from '../Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, toggleModal }) => {
  return createPortal(
    <ModalOverlay onClick={toggleModal}>
      <ModalView>{children}</ModalView>
    </ModalOverlay>,
    modalRoot
  );
};

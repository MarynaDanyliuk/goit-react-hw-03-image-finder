import { Component } from 'react';

import { createPortal } from 'react-dom';

// import PropTypes from 'prop-types';

import { ModalOverlay, ModalView } from '../Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleToggle);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.handleToggle);
  }

  handleToggle = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.handleToggle(this.state);
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <ModalOverlay onClick={this.handleToggle}>
        <ModalView>{children}</ModalView>
      </ModalOverlay>,
      modalRoot
    );
  }
}

export default Modal;

// export const Modal = ({ children, handleToggle }) => {
// return createPortal(
//   <ModalOverlay onClick={handleToggle}>
//     <ModalView>{children}</ModalView>
//   </ModalOverlay>,
//   modalRoot
// );
// };

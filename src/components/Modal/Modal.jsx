import { useEffect } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackDropClick}>
      <ModalContainer>
        <img src={imageUrl} alt="largeImage" />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

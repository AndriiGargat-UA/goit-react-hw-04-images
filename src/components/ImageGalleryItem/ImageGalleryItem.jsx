import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImage, largeImage, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !showModal);
  };

  return (
    <GalleryItem>
      <GalleryImage src={smallImage} alt={tags} onClick={toggleModal} />
      {showModal && <Modal imageUrl={largeImage} onClose={toggleModal} />}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

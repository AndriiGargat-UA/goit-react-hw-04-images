import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { smallImage, largeImage, tags } = this.props;
    return (
      <GalleryItem>
        <GalleryImage src={smallImage} alt={tags} onClick={this.toggleModal} />
        {this.state.showModal && (
          <Modal imageUrl={largeImage} onClose={this.toggleModal} />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
}
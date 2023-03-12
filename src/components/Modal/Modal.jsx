import { Component } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl } = this.props;
    return (
      <Overlay onClick={this.handleBackDropClick}>
        <ModalContainer>
          <img src={imageUrl} alt="largeImage" />
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

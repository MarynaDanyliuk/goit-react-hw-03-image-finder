// import PropTypes from 'prop-types';
import { ButtonLoadMore } from '../Button/Button.styled';

export const Button = ({ handelClick }) => {
  return <ButtonLoadMore onClick={handelClick}>Load more</ButtonLoadMore>;
};

// ImageGalleryItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };

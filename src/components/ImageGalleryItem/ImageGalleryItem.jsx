import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ pic, name }) => {
  return (
    <li className={css['gallery-item']}>
      <img src={pic} alt={name} />
    </li>
  );
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

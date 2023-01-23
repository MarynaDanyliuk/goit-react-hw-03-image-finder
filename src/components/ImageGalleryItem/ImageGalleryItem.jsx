import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ pic, preview, id }) => {
  return (
    <li className={css['gallery-item']} key={id}>
      <a href={pic}>
        <img src={preview} alt="pcture" />
      </a>
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

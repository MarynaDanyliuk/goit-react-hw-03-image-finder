// import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

import {
  GalleryItem,
  GalleryImage,
} from '../ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ largeUrl, previewUrl, id, toggleModal }) => {
  return (
    <GalleryItem key={id}>
      <a href={largeUrl}>
        <GalleryImage src={previewUrl} alt="picture" onClick={toggleModal} />
      </a>
    </GalleryItem>
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

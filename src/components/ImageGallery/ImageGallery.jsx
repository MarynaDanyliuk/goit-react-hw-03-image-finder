import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
import { Gallery } from '../ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          largeUrl={image.largeImageURL}
          previewUrl={image.webformatURL}
          key={image.id}
        />
      ))}
    </Gallery>
  );
};

// ImageGallery.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

// import PropTypes from 'prop-types';
import { Gallery } from '../ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images, showImage }) => {
  return (
    <Gallery>
      {images.map(({ largeImageURL, webformatURL, id }) => (
        <ImageGalleryItem
          largeUrl={largeImageURL}
          previewUrl={webformatURL}
          key={id}
          showImage={() => showImage({ largeImageURL, webformatURL })}
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

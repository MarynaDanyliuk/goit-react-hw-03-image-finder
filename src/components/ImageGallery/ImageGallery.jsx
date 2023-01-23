// import { nanoid } from 'nanoid';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
import { Gallery } from '../ImageGallery/ImageGallery.styled';

// id: '',
// webformatURL: '',
// largeImageURL: '',

export const ImageGallery = ({ images }) => {
  //   const picId = nanoid();
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          pic={image.largeImageURL}
          preview={image.webformatURL}
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

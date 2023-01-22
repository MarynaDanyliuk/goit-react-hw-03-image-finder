import css from './ImageGallery.module.css';
// import { nanoid } from 'nanoid';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  //   const picId = nanoid();
  return (
    <ul className={css['gallery-list']}>
      {/* {images.map(image => (
        <ImageGalleryItem pic={picId} name={image.name} key={image.id} />
      ))} */}
    </ul>
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

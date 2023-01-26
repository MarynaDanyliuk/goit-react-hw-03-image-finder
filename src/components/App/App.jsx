import React from 'react';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { LoaderWatch } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

// import apiServise from 'apiServise/api';

import GetImagesApiService from 'apiServise/api';
const getImagesApiService = new GetImagesApiService();

export class App extends React.Component {
  state = {
    images: [],
    query: '',
    loading: false,
    showModal: false,
  };

  onHandleSubmit = ({ query }) => {
    this.setState({ query: query, loading: true });

    getImagesApiService.resetPage();

    // console.log(query);
    if (query.trim() === '') {
      this.setState({
        images: [],
      });
      return;
    }

    getImagesApiService
      .fetchImages(query)
      .then(data => {
        // console.log(data);
        this.setState({ images: data.hits });
      })
      .catch(error => {
        console.log('Error');
      })
      .finally(() => {
        this.setState({ loading: false });
      });

    console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
  };

  onHandelClick = () => {
    console.log('кликнули на Load more');

    getImagesApiService.incrementPage();
    console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
  };

  onToggleModal = () => {
    console.log('кликнули на фото для открытия модального окна');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidMount() {}

  render() {
    const { images, loading, showModal } = this.state;
    // const { largeUrl } = this.state.images;
    return (
      <Container>
        <Searchbar onSubmit={this.onHandleSubmit} />
        {loading && <LoaderWatch />}
        {images && <ImageGallery images={images} />}
        {images.length > 0 && <Button handelClick={this.onHandelClick} />}
        {showModal && (
          <Modal>
            <ImageGalleryItem
              images={images}
              toggleModal={this.onToggleModal}
            />
          </Modal>
        )}
      </Container>
    );
  }
}

//  onClick={this.onToggleModal}

// ____________2 var_____________________
// apiServise(query)
//   .then(data => {
//     this.setState({ images: data.hits });
//   })
//   .finally(() => {
//     this.setState({ loading: false });
//   });
// ____________________________________________________________
// onClick={this.onHandelClick}
// ____________________1 var___________________________________
// try {
//   const imagesList = await getImagesApiService.fetchImages(query);
//   console.log(imagesList);
//   // this.setState({ images: imagesList, query: query });
//   // console.log(this.state.images);
//   console.log(
//     `После запроса, если все ок - наш объект`,
//     getImagesApiService
//   );
// } catch (error) {
//   console.log(`Error`);
// }
// _________________2 variant__________________
// fetch(
//   `https://pixabay.com/api/?q=${query}&page=1&key=31808257-b1d1bead71ab6681d9f118ecf&image_type=photo&orientation=horizontal&per_page=12`
// )
//   .then(response => response.json())
//   .then(data => {
//     this.setState({ images: data.hits });
//   });

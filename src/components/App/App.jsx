import React from 'react';
// import axios from 'axios';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { LoaderWatch } from '../Loader/Loader';
import Modal from '../Modal/Modal';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { searchImages } from 'apiServise/apiImages';

// import apiServise from 'apiServise/api';

// import GetImagesApiService from 'apiServise/api';
// const getImagesApiService = new GetImagesApiService();

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    loading: false,
    page: 1,
    showModal: false,
    imageDetailse: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      if (query.trim() === '') {
        this.setState({
          images: [],
          loading: true,
        });
        return;
      }
      this.fetchImages();
    }
  }

  onToggleModal = event => {
    console.log('кликнули toggle модального окна');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { query, page } = this.state;

      const data = await searchImages(query, page);

      // console.log(data.hits);

      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState('Error');
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImages = ({ query }) => {
    this.setState({ query, images: [], page: 1 });
    // console.log(`до запроса наш объект`, this.state);
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // console.log(`После запроса, если все ок - наш объект`, this.state);
  };

  showImage = ({ largeImageURL, webformatURL, id }) => {
    console.log('кликнули img');
    this.setState({
      imageDetailse: {
        largeImageURL,
        webformatURL,
        id,
      },
      showModal: true,
    });

    //  const { largeImageURL, webformatURL, id } = this.state.imageDetailse;
  };

  render() {
    const { images, loading, showModal } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.searchImages} />
        {loading && <LoaderWatch />}
        {images && <ImageGallery images={images} showImage={this.showImage} />}
        {Boolean(images.length) && <Button handelClick={this.onLoadMore} />}

        {showModal && (
          <Modal handleToggle={() => this.onToggleModal()}>
            <ImageGalleryItem
              showImage={() => this.showImage()}
              imageDetailse={this.state.imageDetailse}
            />
          </Modal>
        )}
      </Container>
    );
  }
}
//  ___________________________________________
// onHandleSubmit = ({ query }) => {
//   this.setState({
//     query: query,
//     // page: 1,
//     // images: [],
//     // loading: true,
//   });

// console.log(`до запроса наш объект`, this.state);

// getImagesApiService.resetPage();

// if (query.trim() === '') {
//   this.setState({
//     images: [],
//   });
//   return;
// }

// getImagesApiService
//   .fetchImages(query)
//   .then(data => {
//     this.setState({ images: data.hits });
//   })
//   .catch(error => {
//     console.log('Error');
//   })
//   .finally(() => {
//     this.setState({ loading: false });
//   });

// console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
// };
// ________________________________________

// [...images, ...data.hits]

// componentDidUpdate(_, prevState) {
//   console.log(`до запроса наш объект`, this.state);

//   console.log('prevState.page:', prevState.page);
//   console.log('this.state.page:', this.state.page);

//   console.log('prevState.query:', prevState.query);
//   console.log('this.state.query:', this.state.query);

//   if (
//     prevState.page !== this.state.page ||
//     prevState.query !== this.state.query
//   ) {
//     this.fetchImages(this.state.query);

//     // this.resetPage();
//     // getImagesApiService.resetPage();
//   }
// }

// fetchImages = query => {
//   query = this.state.query;

//   if (query.trim() === '') {
//     this.setState({
//       images: [],
//     });
//     return;
//   }

//   const API_KEY = '31808257-b1d1bead71ab6681d9f118ecf';
//   const BASE_URL = 'https://pixabay.com/api/';

//   return fetch(
//     `${BASE_URL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then(response => response.json())
//     .then(data => {
//       this.setState({ images: data.hits });
//       // console.log(`После запроса, если все ок - наш объект`, this.state);
//     })
//     .catch(error => {
//       console.log('Error');
//     })
//     .finally(() => {
//       this.setState({ loading: false });
//     });
// };

// onHandelClick = () => {
//   console.log('кликнули на Load more');

//   getImagesApiService.incrementPage();
//   console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
// };

// _____________________________________________________________

/* <ImageGalleryItem images={images[0]} handleToggle={this.onToggleModal} />; */

// src = 'https://pixabay.com/get/g7047c46c9274fd9f2d05bccc6…195b6f29d0b341c5875f4fa37c9ea1b6a8a9ea1c5_640.jpg'
// _____________________________________________________
// backdrop onClose
//  if (event) {
//    console.log(
//      ' нажали backdrop, нужно закрыть модалку',
//      event.currentTarget
//    );

//    this.props.handleToggle(event);
//  }
// _____________________________________

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

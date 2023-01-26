import React from 'react';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { LoaderWatch } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

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

  componentDidMount() {
    window.addEventListener('click', event => {
      console.log(event.currentTarget);
    });
    // window.addEventListener('keydown', event => {
    //   console.log(event.currentTarget);
    //   if (event.code === 'Escape') {
    //     console.log(' нажали ESC, нужно закрыть модалку', event.currentTarget);
    //     this.onToggleModal();
    //   }
    // });
  }

  componentWillUnmount() {
    window.addEventListener('keydown', event => {
      console.log(event.currentTarget);
      if (event.code === 'Escape') {
        console.log(' нажали ESC, нужно закрыть модалку', event.currentTarget);
        this.onToggleModal();
      }
    });
  }

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

  onToggleModal = (event, id) => {
    console.log('кликнули Toggle модального окна');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, loading, showModal } = this.state;

    return (
      <Container>
        <Searchbar
          onSubmit={this.onHandleSubmit}
          onClick={this.onToggleModal}
        />
        {loading && <LoaderWatch />}
        {images && (
          <ImageGallery images={images} handleToggle={this.onToggleModal} />
        )}
        {images.length > 0 && <Button handelClick={this.onHandelClick} />}
        {showModal && (
          <Modal handleToggle={this.onToggleModal}>
            <h1>Hello I'm MODALKA</h1>
            {/* <ImageGalleryItem
            // largeUrl={largeImageURL}
            // previewUrl={webformatURL}
            // key={id}
            // onClick={handleToggle}
            /> */}
            <ImageGallery images={images} handleToggle={this.onToggleModal}>
              {this.props.children}
            </ImageGallery>
          </Modal>
        )}
      </Container>
    );
  }
}

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

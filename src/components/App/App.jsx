import React from 'react';
// import axios from 'axios';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

// import { GetImagesApiService } from 'apiServise/api';
// const getImagesApiService = new GetImagesApiService();

export class App extends React.Component {
  state = {
    images: [],
    query: '',
  };

  onHandleSubmit = ({ images, query }) => {
    this.setState({ query: query });
    // if (query === ``) {
    //   return;
    // }
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
    fetch(
      `https://pixabay.com/api/?q=${query}&page=1&key=31808257-b1d1bead71ab6681d9f118ecf&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.hits });
      });
  };

  //  this.setState({ images: imagesList });

  componentDidMount() {
    // const response = await axios.get(
    //   `https://pixabay.com/api/?q=${query}&page=1&key=31808257-b1d1bead71ab6681d9f118ecf&image_type=photo&orientation=horizontal&per_page=12`
    // );
    // this.setState({ images: response.data.hits });
  }

  // _______Answer API__________
  // id - унікальний ідентифікатор
  // webformatURL - посилання на маленьке зображення для списку карток
  // largeImageURL - посилання на велике зображення для модального вікна

  render() {
    const { images } = this.state;
    // const query = this.state.query;
    // const images = this.state.images;
    return (
      <Container>
        <Searchbar onSubmit={this.onHandleSubmit} />
        {images && (
          <ImageGallery images={images}>Cats will be there</ImageGallery>
        )}
        <Button />
      </Container>
    );
  }
}

// _______________________________
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}
// __________________________________
// `` +
//   BASE_URL +
//   `?q=` +
//   `${query}` +
//   `&page=1&key=` +
//   API_KEY +
//   `&image_type=photo&orientation=horizontal&per_page=12`

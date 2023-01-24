import React from 'react';
// import axios from 'axios';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

// import apiServise from 'apiServise/api';

import GetImagesApiService from 'apiServise/api';
const getImagesApiService = new GetImagesApiService();

export class App extends React.Component {
  state = {
    images: [],
    query: '',
    loading: false,
  };

  onHandleSubmit = ({ images, query }) => {
    this.setState({ query: query, loading: true });

    getImagesApiService.query = this.state.query;

    getImagesApiService
      .fetchImages(query)
      .then(data => {
        this.setState({ images: data.hits });
      })
      .finally(() => {
        this.setState({ loading: false });
      });

    console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
  };

  onHandelClick = () => {
    console.log('кликнули на Load more');
    // ______________2 var________________
    // apiServise(this.state.query)
    //   .then(data => {
    //     this.setState({ images: data.hits });
    //   })
    //   .finally(() => {
    //     this.setState({ loading: false });
    //   });
  };

  componentDidMount() {}

  render() {
    const { images, loading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onHandleSubmit} />
        {loading && <h1>Завантажую...</h1>}
        {images && <ImageGallery images={images} />}
        {images.length > 0 && <Button handelClick={this.onHandelClick} />}
      </Container>
    );
  }
}

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

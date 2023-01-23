import React from 'react';
import axios from 'axios';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

const API_KEY = '31808257-b1d1bead71ab6681d9f118ecf';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends React.Component {
  state = {
    images: [],
    word: '',
  };

  async componentDidMount(word) {
    const images = await axios.get(
      `` +
        BASE_URL +
        `?q=` +
        word +
        `&page=1&key=` +
        API_KEY +
        `&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: images.data.hits });
  }

  // _______Answer API__________
  // id - унікальний ідентифікатор
  // webformatURL - посилання на маленьке зображення для списку карток
  // largeImageURL - посилання на велике зображення для модального вікна

  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery images={this.state.images} />
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

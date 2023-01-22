import React from 'react';
import axios from 'axios';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends React.Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://pixabay.com/api/?q=cat&page=1&key=31808257-b1d1bead71ab6681d9f118ecf&image_type=photo&orientation=horizontal&per_page=12'
    );
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery />
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

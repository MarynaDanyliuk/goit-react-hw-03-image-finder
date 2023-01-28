// import axios from 'axios';
// import React from 'react';

export default class GetImagesApiService {
  constructor() {
    this.query = ``;
    // this.page = 1;
    // this.per_page = 20;
  }

  fetchImages(query) {
    console.log(`До запроса наш объект`, this);

    this.query = query;

    const API_KEY = '31808257-b1d1bead71ab6681d9f118ecf';
    const BASE_URL = 'https://pixabay.com/api/';

    return fetch(
      `${BASE_URL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => response.json());
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
// _____________2 var______________________________
// function apiServise(query) {
//   const API_KEY = '31808257-b1d1bead71ab6681d9f118ecf';
//   const BASE_URL = 'https://pixabay.com/api/';

// return fetch(
//   `${BASE_URL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
// ).then(response => response.json());
// }

// export default apiServise;

// ____________1 var_________________-

//   async componentDidMount(query) {
//     const response = await axios.get(
//       `https://pixabay.com/api/?q=${query}&page=1&key=31808257-b1d1bead71ab6681d9f118ecf&image_type=photo&orientation=horizontal&per_page=12`
//     );

//     this.setState({ images: response.data.hits });
//   }
// ____________3 var__________________
// export class GetImagesApiService extends React.Component {
//   state = {
//     query: ``,
//     page: 1,
//     per_page: 12,
//   };

//   async fetchImages(query) {
//     console.log(`До запроса наш объект`, this);
//     const API_KEY = '31808257-b1d1bead71ab6681d9f118ecf';
//     const BASE_URL = 'https://pixabay.com/api/';
//     const response = await axios.get(
//       `` +
//         BASE_URL +
//         `?key=` +
//         API_KEY +
//         `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.per_page}&page=${this.state.page}`
//     );

//     const images = response.data.hits;

//     return images;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   getQuery() {
//     return this.state.query;
//   }

//   setQuery(newWord) {
//     this.setState({ query: newWord });
//   }
// }
// _____________________________________

// __________Notes______________________
// clearContent() {
//   this.query = '';
//   this.page = 0;
// }

// getQuery() {
//   return this.query;
// }

// setQuery(newQuery) {
//   return (this.query = newQuery);
// }

// get query() {
//   return this.query;
// }

// set query(word) {
//   return this.query;
// }

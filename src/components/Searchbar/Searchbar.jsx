import React from 'react';

// import css from './Searchbar.module.css';
// import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from '../Searchbar/Searchbar.styled';

export class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // ________________________
    const { onSubmit } = this.props;
    // this.props.onSubmit(this.state);
    onSubmit({ ...this.state });
    // _________________________
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  // handleToggle = event => {
  //   this.props.onClick(this.state);
  // };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Label>Search</Label>
          </SearchFormButton>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          {/* <button type="button" onClick={this.handleToggle}>
            Open Modal
          </button> */}
        </SearchForm>
      </Header>
    );
  }
}

// export const Searchbar = ({ onSubmit }) => {
//   return (
//     <Header>
//       <SearchForm>
//         <SearchFormButton type="submit">
//           <Label>Search</Label>
//         </SearchFormButton>

//         <Input
//           type="text"
//           autocomplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           name="query"
//           // value={query}
//           onChange={onSubmit}
//         />
//       </SearchForm>
//     </Header>
//   );
// };

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

// onSubmit = { onSubmit };

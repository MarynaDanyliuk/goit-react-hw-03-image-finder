// import css from './Searchbar.module.css';
// import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from '../Searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm>
        <SearchFormButton type="submit" onSubmit={onSubmit}>
          <Label>Search</Label>
        </SearchFormButton>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
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

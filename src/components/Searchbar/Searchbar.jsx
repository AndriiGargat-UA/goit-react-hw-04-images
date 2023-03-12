import {
  SearchbarContainer,
  SearchFormButton,
  SearchForm,
  SearchButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { TbSearch } from 'react-icons/tb';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = ({ target: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Plese enter serch query.');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <TbSearch />
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleNameChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

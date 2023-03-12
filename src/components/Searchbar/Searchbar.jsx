import {
  SearchbarContainer,
  SearchFormButton,
  SearchForm,
  SearchButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { TbSearch } from 'react-icons/tb'
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return toast.error('Plese enter serch query.');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <TbSearch/>
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
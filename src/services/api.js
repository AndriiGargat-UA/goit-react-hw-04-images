import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34097851-d97d06a73d8fbbb76d730e06b';

export const fetchImageSearch = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits
};

fetchImageSearch.PropTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};
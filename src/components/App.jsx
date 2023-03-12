import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { fetchImageSearch } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from 'components/Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { MainContainer } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    images: [],
    imageName: '',
    page: 1,
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.imageName;
    const nextQuery = this.state.imageName;

    if (prevQuery !== nextQuery || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchImageSearch(nextQuery, this.state.page);
        if (response.length === 0) {
          return toast.error(
            'Sorry, there are no images matching your search query.'
          );
        } else {
          return this.setState(({ images }) => ({
            images: [...images, ...response],
          }));
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName, images: [], page: 1 });
  };

  handleLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { isLoading, images, error } = this.state;
    return (
      <MainContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length !== 0 && <ImageGallery images={images} />}
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        {images.length > 11 && !isLoading && (
          <LoadMore onClick={this.handleLoad} />
        )}
        <GlobalStyle />
        <ToastContainer autoClose={2000} />
      </MainContainer>
    );
  }
}

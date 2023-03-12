import { useEffect, useState } from 'react';
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

export const App = () => {
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!imageName) {
      return;
    }

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetchImageSearch(imageName, page);
        if (response.length === 0) {
          return toast.error(
            'Sorry, there are no images matching your search query.'
          );
        } else {
          setImages(state => [...state, ...response]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [imageName, page]);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setImages([]);
    setPage(1);
  };

  const handleLoad = () => {
    setPage(state => state + 1);
  };

  return (
    <MainContainer>
      <Searchbar onSubmit={handleFormSubmit} />
      {images.length !== 0 && <ImageGallery images={images} />}
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {images.length > 11 && !isLoading && <LoadMore onClick={handleLoad} />}
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </MainContainer>
  );
};

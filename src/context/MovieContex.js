import {createContext, useEffect, useState} from 'react';
import fetchMovies from '../api/fetchMovies';

export const MovieContex = createContext();

export const MovieProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData);
        setLoading(false);
      } catch (err) {
        setError('Veri alınırken bir hata oluştu');
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <MovieContex.Provider value={{movies, loading, error}}>
      {children}
    </MovieContex.Provider>
  );
};

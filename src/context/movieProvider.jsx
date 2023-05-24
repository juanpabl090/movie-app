/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import {
  getTrending,
  getCredits,
  getDetails
} from '../api/movie.api'

export const movieContext = createContext();

export const useMovies = () => {
  const context = useContext(movieContext);
  if (!context)
    throw new Error('useMovie must be use within a TaskContextProvider');
  return context
}

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState();

  const loadTrending = async () => {
    try {
      const res = await getTrending();
      setMovies(res.data);
    } catch (error) {
      console.log(error)
    }
  };

  const loadDetails = async (movie_id) => {
    try {
      const res = await getDetails(movie_id)
      setMovies(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  const loadCredits = async (movie_id) => {
    try {
      const res = await getCredits(movie_id)
      setMovies(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <movieContext.Provider value={{ movies, loadTrending, loadDetails, loadCredits, getCredits }}>
      {children}
    </movieContext.Provider>
  )
};

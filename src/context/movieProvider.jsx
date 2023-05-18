/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import {
  getTrending,
} from '../api/movie.api'
import { movieContext } from '../context/movieContext'

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
  }

  return (
    <movieContext.Provider value={{ movies, loadTrending }}>
      {children}
    </movieContext.Provider>
  )
};

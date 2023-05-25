/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import {
  getMovieListSearch
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

  const getSearch = async (query) => {
    try {
      const res = await getMovieListSearch(query)
      JSON.stringify(res)
      setMovies(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <movieContext.Provider value={{ movies, getSearch }}>
      {children}
    </movieContext.Provider>
  )
};

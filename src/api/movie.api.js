import axios from "axios"

const Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTJlMzE5NzQ1YTdmN2UzMThmYzQwNzE2OGZjNTdmNCIsInN1YiI6IjYyYjIyYzUzOGI5NTllMDA1MjdiMDA3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5xIRtLaqdJ9l0QWaMNeMbdj70eLhRv0PTpBnqU98y5s'
const accept = 'application/json'
const method = 'GET'

const options = {
  method: method,
  headers: {
    accept: accept,
    Authorization: Authorization
  }
};

export const getMovieListSearch = async (query) =>
  await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}}&include_adult=false&language=en-US&page=1`, options)

export const getTrending = async () =>
  await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)

export const getDetails = async (review_id) =>
  await axios.get(`https://api.themoviedb.org/3/review/${review_id}`, options)
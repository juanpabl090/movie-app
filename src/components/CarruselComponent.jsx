/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel';

import { useEffect, useState } from 'react';
import { getTrending } from '../api/movie.api';

export default function CarruselComponent({ title, backdrop_path }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then((req) => {
        setMovies(req.data)
      })
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={`https://image.tmdb.org/t/p/w300/${movies}`}
            alt={title}
          />
          <Carousel.Caption>
            <h3>{title}</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
            alt={title}
          />
          <Carousel.Caption>
            <h3>{title}</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
            alt={title}
          />
          <Carousel.Caption>
            <h3>{title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
    </>
  )
}

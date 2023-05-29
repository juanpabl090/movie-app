/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { getCredits } from '../api/movie.api';
import ImageComponent from './ImageComponent';
import NoImageComponent from './NoImageComponent';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

export default function SliderComponent() {

  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const loadCredits = async () => {
      try {
        const url = location.pathname
        const newurl = url.substring(9, 15)
        const res = await getCredits(newurl)
        setMovies(res.data.cast)
      } catch (error) {
        console.log(error)
      }
    }
    loadCredits()
  }, []);

  return (
    <Container>
      <Row>
        <Splide options={{
          type: 'loop',
          rewind: true,
          autoplay: true,
          perMove: 1,
          perPage: 2,
          gap: '1rem',
          arrows: true,
          pagination: false,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            speed: 1
          },
        }}>
          {
            movies.map((movie, index) => (
              <SplideSlide key={index}>
                {
                  movie.profile_path === null
                    ? <NoImageComponent />
                    : <ImageComponent size={'original'} src={movie.profile_path} />
                }
                <p className='text-center'>&#34;{movie.character}&#34;</p>
                <p className='text-center'>{movie.name}</p>
              </SplideSlide>
            ))
          }
        </Splide>
      </Row>
    </Container >
  )
}

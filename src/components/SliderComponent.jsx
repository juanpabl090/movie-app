/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { getCredits } from '../api/movie.api';
import ImageComponent from './ImageComponent';

import '../css/details.css'

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
        <Col>
          <motion.div className='slider-container'>
            <motion.div className='slider' drag='x'
              dragConstraints={{ right: 0, left: -6100 }} >
              {
                movies.map((movie) => (
                  <motion.div className='item' key={movie.id}>
                    {
                      movie.profile_path === null
                        ? <Col md='10' sm='8' xs='6'><Image src='../../public/No-Image-Placeholder.svg' /></Col>
                        : <ImageComponent size={'original'} src={movie.profile_path} />
                    }
                    <p className='text-center'>&#34;{movie.character}&#34;</p>
                    <p className='text-center'>{movie.name}</p>
                  </motion.div>
                ))
              }
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  )
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getDetails } from '../api/movie.api';

import ImageComponent from '../components/ImageComponent'
import SliderComponent from '../components/SliderComponent';

export default function Details() {

  const [movies, setMovies] = useState([]);

  const location = useLocation()

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const url = location.pathname
        const newurl = url.substring(9, 15)
        const res = await getDetails(newurl)
        setMovies(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadDetails()
  }, []);


  return (
    <Container>
      <Container >
        <Row>
          <Col>
            {
              movies === undefined
                ? <></>
                : <ImageComponent src={movies.backdrop_path} size='original' />
            }
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center'>
            <h1>{
              movies === undefined
                ? <></>
                : movies.title}</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          </Col>
          <Col>
            <p>{
              movies === undefined
                ? <></>
                : movies.overview
            }</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <SliderComponent />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

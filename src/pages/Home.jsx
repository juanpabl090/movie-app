/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Row, Container } from "react-bootstrap";
import { getTrending } from '../api/movie.api';

import CardComponent from "../components/CardComponent"

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const res = await getTrending()
        setMovies(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    loadMovie()
  }, []);

  const renderMain = () => {
    if (movies === undefined) return <h1 className='text-center'>Wait a minute</h1>
    return movies.map((movie) => <CardComponent key={movie.id} title={movie.title} poster_path={movie.poster_path} id={movie.id} />)
  }

  return (
    <Container fluid>
      <Row>
        {
          renderMain()
        }
      </Row>
    </Container>
  )
}
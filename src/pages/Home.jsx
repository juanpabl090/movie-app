/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getTrending } from '../api/movie.api';
import { Row, Container } from "react-bootstrap";
import CardComponent from "../components/CardComponent"

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then((req) => {
        setMovies(req.data)
      })
  }, []);

  const renderMain = () => {
    if (movies.length === 0) return <h1 className='text-center'>Wait a minute</h1>
    return movies.results.map((movie) => <CardComponent key={movie.id} title={movie.title} poster_path={movie.poster_path} />)
  }

  return (
    <Container fluid>
      <Row>
        <h1 className='text-center'>Trending this week</h1>
        {
          renderMain()
        }
      </Row>
    </Container>
  )
}
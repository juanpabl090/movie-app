import { Container, Row } from "react-bootstrap"
import CardComponent from "../components/CardComponent"
// import data from '../mocks/data.json'

import { useMovies } from '../context/movieProvider'

export default function Found() {

  const { movies } = useMovies();

  const loadSearch = () => {
    if (movies === undefined) return <></>
    return movies.results.map((movie, index) => <CardComponent key={index} id={movie.id} poster_path={movie.poster_path} title={movie.title} />)
  }

  return (
    <Container fluid>
      <Row>
        {
          movies === undefined
            ? <h1 className='d-flex justify-content-center'>No results</h1>
            : <h1 className='d-flex justify-content-center'>Results</h1>
        }
        {loadSearch()}
      </Row>
    </Container>
  )
}

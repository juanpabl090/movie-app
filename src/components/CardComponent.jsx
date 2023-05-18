/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardComponent({ title, overview, poster_path }) {
  return (
    <Card style={{ width: '20rem', margin: '1vmax', border: 'none', textAlign: 'justify' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
        <Button variant="primary">View Ditals</Button>
      </Card.Body>
    </Card>
  )
}

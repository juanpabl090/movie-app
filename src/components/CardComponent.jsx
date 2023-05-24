/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function CardComponent({ title, poster_path, id }) {

  const Navigate = useNavigate();

  return (
    <Card style={{
      width: "20rem",
      margin: "1vmax",
      border: "none",
      cursor: "pointer",
    }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} onClick={() => { Navigate(`/details/${id}`) }} />
      <Card.Body>
        <Card.Title onClick={() => { Navigate(`/details/:${id}`) }}>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

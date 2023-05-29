/* eslint-disable react/prop-types */
import { Image, Container, Row, Col } from 'react-bootstrap';

export default function NoImageComponent() {
  return (
    <Container>
      <Row className='className="d-flex justify-content-center align-items-center'>
        <Col md='10' sm='8' xs='6'>
          <Image src='../../public/No-Image-Placeholder.svg' className='img-fluid' />
        </Col>
      </Row>
    </Container>
  )
}

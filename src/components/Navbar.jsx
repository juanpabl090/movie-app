/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Form, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function NavbarComponent() {

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            Movies
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Avenger, Start Wars..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </header>
  )
}
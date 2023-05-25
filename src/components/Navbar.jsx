/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Navbar, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, } from 'react-router-dom'

export default function NavbarComponent() {

  const Navigate = useNavigate()

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
            <Button variant="outline-primary" onClick={() => { Navigate(`/search/:1`) }}>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </header >
  )
}
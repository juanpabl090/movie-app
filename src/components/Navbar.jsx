/* eslint-disable react-hooks/exhaustive-deps */
import { Field, Formik, Form } from 'formik'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate, } from 'react-router-dom'
import { useMovies } from '../context/movieProvider'

export default function NavbarComponent() {
  const Navigate = useNavigate()

  const { getSearch } = useMovies();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const query = JSON.stringify(values)
      const newquery = query.slice(7);
      await getSearch(newquery)
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            Movies
          </Navbar.Brand>
          <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
            <Form>
              <Field type="text" name="query" placeholder="Avengers, Star Wars..." />
              <button type="submit" onClick={() => Navigate('/search')}>Search</button>
            </Form>
          </Formik>
        </Container>
      </Navbar>
    </header >
  )
}
import { Container, Row } from "react-bootstrap"
import CardComponent from "../components/CardComponent"
import data from '../mocks/data.json'

export default function Found() {

	const loadSearch = () => {
		if (data === undefined) return <></>
		return data.results.map((movie, index) => <CardComponent key={index} id={movie.id} poster_path={movie.poster_path} title={movie.title} />)
	}

	return (
		<Container fluid>
			<Row>
				<h1 className='d-flex justify-content-center'>Results</h1>
				{loadSearch()}
			</Row>
		</Container>
	)
}

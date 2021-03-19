import Head from 'next/head'
import { Container } from "react-bootstrap";
import {useState} from 'react'

export default function Home() {

	const [votes, setVotes] = useState([])

	return (<div>
		<Head>
			<title>GT</title>
		</Head>

		<Container>
			<h1>Sistema de encaminhamento</h1>
			<p>Bla</p>
		</Container>
	</div>)
}

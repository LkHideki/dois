import Head from 'next/head'
import { Container } from "react-bootstrap";
import {useState} from 'react'

export default function Home() {

	return (<div>
		<Head>
			<title>GT</title>
		</Head>

		<Container>
			<h1>Sistema de votação</h1>
		</Container>
	</div>)
}

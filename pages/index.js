import Head from 'next/head'
import { Button, Container } from "react-bootstrap";
import Root1 from "../components/comp1/root1";
import Root0 from "../components/root0"
import Link from "next/link"

export default function Home() {
	return (<div>
		<Head>
			<title>Feito com o Next.js</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Container>
			<h1>Olá mundo!</h1>
			<h2>Título 2</h2>

			<Link href="./Pasta1/pg1">
				<Button onClick={()=>{alert('Você quer ir para a página da Pasta 1?')}}>
					Página 1
				</Button>
			</Link>

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eros, a ultrices quam ornare eget. Fusce nisl tellus, consequat sit amet dui sed, rutrum laoreet sapien. Morbi efficitur neque in tellus eleifend venenatis. Aliquam sodales condimentum mauris. Donec vulputate finibus nibh, ac consectetur nibh interdum ut. Sed eu mauris leo. Nullam vitae mauris a magna elementum malesuada non at dui.</p>

			<p>
			Praesent interdum consequat diam, eu bibendum nibh suscipit vel. Aenean ultrices lacinia lacinia. Quisque ut velit enim. Nullam malesuada at dui quis pharetra. Aenean porttitor nisl ut ipsum eleifend, id sagittis lacus auctor. Nulla facilisi. Proin egestas, lectus in tincidunt laoreet, est nisi vehicula sapien, at auctor magna odio id nibh. Nulla ut molestie massa, et molestie lectus.
			</p>

			<p>
			Sed vulputate enim eu fringilla fermentum. Aliquam rhoncus tellus lacus, id eleifend arcu luctus ut. Phasellus vehicula arcu ex, quis condimentum magna congue ut. Ut consequat dui eget turpis cursus sodales. Integer sodales vehicula ex ac venenatis. Fusce convallis rhoncus massa, aliquam luctus felis varius in. Maecenas molestie laoreet molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec imperdiet vulputate est, vel tristique tortor congue ut. Phasellus efficitur malesuada ligula. In mollis nec dolor a congue. Sed quis tortor vitae est ullamcorper pretium. Duis scelerisque, mi eu viverra ultricies, lorem ante viverra erat, at luctus neque enim consequat felis. Nunc viverra risus justo, nec imperdiet massa pellentesque et. Vivamus quam sem, efficitur mollis sapien eu, pellentesque feugiat magna. Vivamus non rhoncus est.
			</p>
		</Container>

		<Container>
			<Root0 />
			<Root1 /> 
		</Container>
	</div>)
}

import { useRouter } from "next/router";
import Link from "next/link"

export default function Pg(){
    const router = useRouter()
    const {pasta, pg} = router.query

    return(<>
        <h1>Pasta: {pasta}</h1>
        <h3>Página: {pg}</h3>

        <p>
            Este é  um exemplo de uso do next/router.
        </p>

        <Link href="/">
            <a className="bridge">Voltar para a home</a>
        </Link>
    </>)
}
import Head from 'next/head'
import Root1 from "../../components/comp1/root1";
import Root0 from "../../components/root0"
import Link from "next/link"

export default function Pg1(){
    return(<div>
        <Head>
            <title>pg1 {'<'} Pasta 1</title>
        </Head>
        
        <h1>Página 1</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eros, a ultrices quam ornare eget. Fusce nisl tellus, consequat sit amet dui sed, rutrum laoreet sapien. Morbi efficitur neque in tellus eleifend venenatis. Aliquam sodales condimentum mauris. Donec vulputate finibus nibh, ac consectetur nibh interdum ut. Sed eu mauris leo. Nullam vitae mauris a magna elementum malesuada non at dui.</p>

        <p className="abcd">
        Praesent interdum consequat diam, eu bibendum nibh suscipit vel. Aenean ultrices lacinia lacinia. Quisque ut velit enim. Nullam malesuada at dui quis pharetra. Aenean porttitor nisl ut ipsum eleifend, id sagittis lacus auctor. Nulla facilisi. Proin egestas, lectus in tincidunt laoreet, est nisi vehicula sapien, at auctor magna odio id nibh. Nulla ut molestie massa, et molestie lectus.
        </p>

        <Link href="../">
            <a style={{color:"#32f"}}>Voltar para a home</a>
        </Link>

        <center>
            <Root0 />
            <Root1 />
        </center>
    </div>)
}
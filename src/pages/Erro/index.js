import { Link } from "react-router-dom";
function Erro(){
    return(
    <main className="w-full h-screen m-auto">
        <h1 className="text-5xl pt-72">
            404
        </h1>  
        <h2> Page not found </h2>
        <br></br>
        <Link className="border-2 p-2" to="/" >
        back to Home</Link>
    </main>
    )
}
export default Erro;
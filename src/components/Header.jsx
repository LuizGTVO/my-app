import { Link } from "react-router";

function header () {
    return (
        <header className="bg-gray-800 text-white text-center p-6 text-3xl" >
            <h1>MyApp</h1>
            <Link to="/" className="text-gray-300 hover:text-white mx-4 text-2xl">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-300 mx-4 text-2xl">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-amber-400 mx-4 text-2xl">Contact</Link>
            
        </header>
    )
}

export default header;
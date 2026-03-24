import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center ">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl text-shadow-gray-800 mt-4">Pagína não encontrada...</p>
        <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Voltar para Home</Link>
    </div>
  );
}
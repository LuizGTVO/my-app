import { useParams } from "react-router";

export default function Product() {
    const { slug } = useParams();
    return (
        <section className="p-6 text-center bg-gray-100 rounded-lg shadow-md text-2xl">
            <h1 className="text-4xl font-bold mb-2">Produto:</h1>
            <p>Slug recebido da url: {slug} </p>
        </section>
    )
}
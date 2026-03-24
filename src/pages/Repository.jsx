import { useParams } from "react-router";  

export default function Repository() {
    const { project , username } = useParams();
    
    return (
        <div className="p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Repósitorio</h1>
            <p className="text-2xl">Projeto: {project}</p>
            <p className="text-2xl">Autor: {username}</p>
        </div>
    )
}
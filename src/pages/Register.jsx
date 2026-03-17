import { UserRound } from 'lucide-react';

export default function register() {
    return (
        <>
         <h1 className='text-yellow-500 text-center text-3xl p-4 font-bold font-oswald'>Cadastro</h1>
            <form className=" flex flex-col gap-4">
                <input type="password" placeholder="Insira seu nome" className="border rounded-xl px-4 py-4 " />
                <input type="email" placeholder="Digite seu email" className="border rounded-xl px-4 py-4 " />
                <input type="password" placeholder="Digite sua senha" className="border rounded-xl px-4 py-4 " />
                <input type="password" placeholder="Confirme sua senha" className="border rounded-xl px-4 py-4 " />
            
                <button type="submit" className="bg-linear-to-r from-yellow-400 to-yellow-500 text-white rounded-xl px-4 py-5 font-oswald">Entrar</button>
                
            </form>
        </>
    )

}
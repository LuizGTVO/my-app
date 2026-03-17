import { Link } from "react-router";
import { UserRound } from 'lucide-react';

export default function Login() {
  return (
    <>
      <h1 className="text-yellow-500 text-center text-3xl  p-4 font-bold font-oswald">
        Login
      </h1>
      <form className=" flex flex-col gap-4">
        <input
          type="email"
          placeholder="Digite seu email"
          className="border rounded-xl px-4 py-4 "
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="border rounded-xl px-4 py-4 "
        />

        <button
          type="submit"
          className="bg-linear-to-r from-yellow-400 to-yellow-500 text-white rounded-xl px-4 py-5 font-oswald"
        >
          Entrar
        </button>
        <div className="text-center">
          <a href="/reset" className="text-sm text-yellow-600 hover:underline font-oswald">
            Esqueci minha senha?
          </a>
        </div>

        <div className="text-center">
          <Link to="/register" className="text-sm text-yellow-600 hover:underline font-oswald">
            Cadastrar-se
          </Link>
        </div>
      </form>
    </>
  );
}

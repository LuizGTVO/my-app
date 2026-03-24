import { NavLink } from "react-router";
import { Origami } from "lucide-react";
import { UserRound } from "lucide-react";

function LinkClass({ isActive }) {
  return isActive
    ? "border-b-2 border-red-500"
    : "text-blue-500 hover:text-yellow-500";
}
function header() {
  return (
    <header className="bg-gray-800 text-white text-center p-6 text-3xl">
      <h1>
        MyApp
        <Origami className="inline fill-amber-500 stroke-black stroke-2" />
      </h1>
      <div className=" flex flex-row gap-5 text-center justify-center mt-4 p-4">
        <NavLink to="/" className={LinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={LinkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={LinkClass}>
          Contact
        </NavLink>
        <NavLink to="/app" className={LinkClass}>
          App
        </NavLink>
        <NavLink to="/produto/:slug" className={LinkClass}>
          Produto
        </NavLink>
        
        <NavLink to="/login" className={LinkClass}>
          <UserRound className="inline fill-amber-500 stroke-black stroke-2 " />
        </NavLink>
      </div>
    </header>
  );
}

export default header;

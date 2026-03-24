import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-red-400 to-yellow-300  bg-cover">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}

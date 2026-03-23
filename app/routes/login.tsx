import { Link } from "react-router";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <form className="bg-gray-200 p-6 rounded-xl shadow-md w-100 space-y-4 text-blue-500">
        <h2 className="text-xl font-bold text-center">Iniciar sesión</h2>

        <div className="flex justify-center items-center gap-2">
          <label htmlFor="UserInput" className="w-1/3">Usuario:</label>
          <input
            id="UserInput"
            type="email"
            placeholder="Ingrese su email"
            className="p-2 border border-black rounded w-2/3"
          />
        </div>

        <div className="flex justify-center itmes-center gap-2">
          <label htmlFor="PasswordInput" className="w-1/3">Contraseña:</label>
          <input
            id="PasswordInput"
            type="password"
            placeholder="Ingrese su contraseña"
            className="p-2 border border-black rounded w-2/3"
          />
        </div>

        <button className="w-full bg-blue-400 p-2 rounded hover:bg-blue-300 text-white mt-6">
          Entrar
        </button>

        <div className="flex flex-row gap-2 justify-center items-center mt-4">
          <p className="text-black text-sm">
            ¿No tienes cuenta?
          </p>
          <Link to="/register">Registrate</Link>
        </div>
      </form>
    </div>
  );
}
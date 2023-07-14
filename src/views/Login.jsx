import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-7 py-10">
        <form>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-slate-800 font-bold"
            >Email:</label>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Tu email"
              className="mt-2 w-full p-3 bg-gray-50 border-solid border-2 border-gray-200 rounded-md focus:outline-none focus:ring"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-slate-800 font-bold"
            >Contraseña:</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu contraseña"
              className="mt-2 w-full p-3 bg-gray-50 border-solid border-2 border-gray-200 rounded-md focus:outline-none focus:ring"
              autoComplete="off"
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
          />

        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/register">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </>
  )
}

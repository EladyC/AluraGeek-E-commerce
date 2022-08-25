import Image from "next/image";
import Link from "next/link";
import logo from "../assets/img/logo.png";
import { SearchIcon } from "../assets/svg/icons";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/*Navbar*/}
      <nav className="p-10 w-full max-w-[140vh] flex justify-between">
        <div className="flex items-center relative">
          <Link href="/">
            <div className="cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
          </Link>
          <div className="ml-6 hidden lg:flex items-center text-gray-500">
            <input
              className="w-[45vh] px-4 py-3 text-sm bg-gray-100 rounded-3xl"
              type="text"
              placeholder="¿Qué deseas buscar?"
            />
            <SearchIcon features="absolute h-5 w-5 right-5" />
          </div>
        </div>
        <Link href="/login">
          <button className="w-52 lg:w-56 py-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-xl">
            Login
          </button>
        </Link>
        <button className="lg:hidden p-4 text-gray-500 bg-gray-100 rounded-full">
          <SearchIcon features="h-5 w-5" />
        </button>
      </nav>

      {/*Factor cambiante*/}
      <Component {...pageProps} />

      {/*Footer 1*/}
      <div className="w-full flex items-center justify-center bg-sky-100">
        <div className="p-10 w-full max-w-[140vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-center justify-center sm:block">
              <Image src={logo} alt="logo" />
            </div>
            <ul className="flex flex-col items-center justify-center sm:block">
              <li className="mb-4">Quienes somos</li>
              <li className="mb-4">Política de privacidad</li>
              <li className="mb-4">Programa de fidelidad</li>
              <li className="mb-4">Nuestras tiendas</li>
              <li className="mb-4">Quiero ser franquiciado</li>
              <li>Anúncie aquí</li>
            </ul>
          </div>

          <form className="col-span-1">
            <h3 className="text-gray-700 font-bold">Hable con nosotros</h3>
            <div className="mt-3 p-4 bg-white rounded-md shadow-md">
              <p className="text-sm text-gray-500">Nombre</p>
              <input
                type="text"
                className="mt-2 w-full outline-none border-b-2"
              />
            </div>
            <textarea
              className="mt-3 p-4 w-full text-base rounded-md shadow-md"
              placeholder="Escribe tu mensaje"
            />
            <button
              className="mt-3 px-5 py-3 bg-blue-500 text-white"
              type="submit"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      {/*Footer 2*/}
      <footer className="p-10 w-full bg-white flex flex-col items-center justify-center">
        <p>Desarrollado por Lady Cristina Espinoza Aguedo</p>
        <p>2022</p>
      </footer>
    </div>
  );
}

export default MyApp;

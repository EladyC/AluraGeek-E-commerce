import Link from "next/link";
import React from "react";

const Inicio = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <form className="px-10 py-14 w-[50vh] max-w-[140vh]">
        <h1 className="text-center text-xl text-gray-700 font-bold">
          Iniciar de Sesión
        </h1>
        <input
          type="text"
          placeholder="Escriba su correo electrónico"
          className="w-full mt-5 p-4 bg-white outline-none rounded-sm shadow-sm border-b-2"
        />
        <input
          type="text"
          placeholder="Escriba su contraseña"
          className="w-full mt-5 p-4 bg-white outline-none rounded-sm shadow-sm border-b-2"
        />
        <Link href="/">
          <button
            className="w-full mt-5 p-5 bg-blue-500 text-white"
            type="submit"
          >
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Inicio;

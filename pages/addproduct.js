import Link from "next/link";
import React from "react";

const AddProduct = () => {
  const inputs = [
    "URL de la imagen",
    "Categoría",
    "Nombre del producto",
    "Precio del producto",
  ];
  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <form className="px-10 py-14 w-[65vh] max-w-[140vh]">
        <h1 className="text-left text-3xl text-gray-700 font-bold">
          Agregar nuevo producto
        </h1>
        {inputs.map((el, index) => (
          <div className="mt-3 p-4 bg-white rounded-sm shadow-sm" key={index}>
            <p className="text-sm text-gray-500">{el}</p>
            <input
              type="text"
              className="mt-2 w-full outline-none border-b-2"
            />
          </div>
        ))}
        <textarea
          className="mt-3 p-4 w-full text-base rounded-md shadow-md"
          placeholder="Descripción del producto"
        />
        <Link href="/">
          <button className="w-full mt-5 p-5 bg-blue-500 text-white">
            Agregar producto
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddProduct;

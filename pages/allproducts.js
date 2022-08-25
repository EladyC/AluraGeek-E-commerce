import Image from "next/image";
import React from "react";
import { Edit, Trash } from "../assets/svg/icons";
import { allCategories } from "../assets/data";
import Link from "next/link";

const products = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-200">
      <div className="px-10 pb-10 w-full max-w-[140vh]">
        <div className="mt-10">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold text-gray-700">
              {allCategories.nombre}
            </h2>
            <Link href="/addproduct">
              <button className="px-5 py-3 bg-blue-500 text-white">
                Agregar Producto
              </button>
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allCategories.images.map((el, index) => (
              <div className="" key={index}>
                <div className="relative">
                  <Image src={el.img} alt={`img_${index}`} />
                  <div className="absolute right-2 top-2 text-white flex">
                    <div className="bg-gray-800 p-1 rounded-full">
                      <Trash features="h-5 w-5" />
                    </div>
                    <div className="ml-1 bg-gray-800 p-1 rounded-full">
                      <Edit features="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-bold">{el.nombre}</h3>
                <h4 className="text-base font-extrabold">$60.00</h4>
                <h3 className="text-sm text-gray-600 font-bold">#1111111</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;

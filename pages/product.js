import Image from "next/image";
import Link from "next/link";
import React from "react";
import { categories } from "../assets/data";

const Product = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <div className="px-10 py-14 max-w-[140vh]">
        <div className="mt-5 grid grid-cols-2 gap-5">
          <div className="flex items-center justify-center">
            <Image src={categories[0].images[0].img} alt="product" />
          </div>
          <div className="">
            <h3 className="text-5xl text-gray-700 font-bold">
              {categories[0].images[0].nombre}
            </h3>
            <h4 className="mt-5 text-xl font-extrabold">$60.00</h4>
            <p className="mt-5 text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              expedita veritatis amet, totam pariatur officiis necessitatibus,
              adipisci obcaecati quas, eligendi commodi rerum. Cupiditate
              laborum vitae explicabo dignissimos est voluptate quia nobis
              labore numquam quibusdam! Blanditiis eveniet nulla eaque laborum
              quis officia inventore cumque. Culpa, modi enim voluptas
              voluptates incidunt fuga.
            </p>
          </div>
        </div>

        <h1 className="mt-10 text-left text-3xl text-gray-700 font-bold">
          Productos similares
        </h1>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories[0].images.map((el, index) => (
            <div className="" key={index}>
              <Image src={el.img} alt={`img_${index}`} />
              <h3 className="text-sm font-bold">{el.nombre}</h3>
              <h4 className="text-base font-extrabold">$60.00</h4>
              <Link href="/product">
                <h3 className="text-base text-blue-600 hover:text-indigo-600  font-bold cursor-pointer">
                  Ver Producto
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

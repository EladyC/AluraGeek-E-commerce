import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../assets/svg/icons";
import { categories } from "../assets/data";

export default function Home() {
  return (
    <>
      {/*Banner*/}
      <div className="w-full h-[45vh] relative">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="absolute z-10 h-full w-full object-cover"
          src="https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/S9lSidETEnzSSCOIdohAXD4m1cE=/1024x768/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/QKMHT767YNE7ZBYSYV73O7CDZI.jpg"
          alt="banner"
        />
        <div className="w-full h-full flex items-end justify-center">
          <div className="p-10 w-full absolute z-20 max-w-[140vh] text-white">
            <h2 className="text-6xl font-bold">Febrero Promocional</h2>
            <h3 className="mt-5 text-2xl font-bold">
              Productos seleccionados con el 33% de descuento
            </h3>
            <button className="mt-5 py-3 px-4 bg-blue-500">Ver consolas</button>
          </div>
        </div>
      </div>

      {/*Productos*/}
      <div className="w-full flex items-center justify-center bg-gray-200">
        <div className="px-10 pb-10 w-full max-w-[140vh]">
          {categories.map((el, index) => (
            <div className="mt-10" key={index}>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold text-gray-700">
                  {el.nombre}
                </h2>
                <Link href="/allproducts">
                  <div className="flex items-center text-blue-700 hover:text-indigo-700 cursor-pointer">
                    <p className="text-base font-bold">Ver todo</p>
                    <ArrowRight features="ml-3 h-5 w-5" />
                  </div>
                </Link>
              </div>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {el.images.map((el, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

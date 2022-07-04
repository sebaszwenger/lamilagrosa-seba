import Image from "next/image";
import React from "react";

const MenuCard = ({ item }) => {
  return (
    <li className="text-center bg-white shadow-md shadow-gray-700 cursor-pointer  hover:ring-4 hover:ring-gray-500 hovr:scale-105">
      <Image
        src={item.imagen}
        // layout="responsive"
        width="600"
        height="400"
        alt="producto"
        objectFit="cover"
      />
      <div className="text-center">
        <h2 className="font-bold text-xl">{item.nombre}</h2>
        <ul className="flex gap-2 justify-center pb-2">
          (
          {item.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
          )
        </ul>
      </div>
    </li>
  );
};

export default MenuCard;

//  <li className="max-w-[500px] h-auto mx-auto mb-16 md:max-w-[310px] transition-all ease-in rounded-md">
//    <Image
//      src={item.imagen}
//      // layout="responsive"
//      width="800"
//      height="500"
//      alt="producto"
//      objectFit="cover"
//    />
//    <div className="mt-2 text-center">
//      <h2 className="font-bold">{item.nombre}</h2>
//      <p>{item.ingredientes}</p>
//    </div>
//  </li>;

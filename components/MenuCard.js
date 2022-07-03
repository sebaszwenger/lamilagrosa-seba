import Image from "next/image";
import React from "react";

const MenuCard = ({ item }) => {
  return (
    <li className="max-w-[500px] h-auto mx-auto mb-16 md:max-w-[310px] transition-all ease-in rounded-md">
      <Image
        src={item.imagen}
        // layout="responsive"
        width="800"
        height="500"
        alt="producto"
        objectFit="cover"
      />
      <div className="mt-2 text-center">
        <h2 className="font-bold">{item.nombre}</h2>
        <p>{item.ingredientes}</p>
      </div>
    </li>
  );
};

export default MenuCard;

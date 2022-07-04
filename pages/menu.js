import React, { useState } from "react";
import MenuList from "../components/MenuList";
import TipoMilaBar from "../components/TipoMilaBar";

const carta = [
  {
    imagen: "/img/menues/Capresse.jpg",
    nombre: "Milanesa Capresse",
    ingredientes: ["muzzarella", "tomate", "pesto", "albahaca fresca"],
    precio: 1337,
  },
  {
    imagen: "/img/menues/Clásica.png",
    nombre: "Milanesa clasica",
    ingredientes: ["perefil"],
    precio: 1215,
  },
  {
    imagen: "/img/menues/de la casa.jpg",
    nombre: "Milanesa de la casa",
    ingredientes: ["muzzarella", "jamón", "tomate", "huevo frito"],
    precio: 1400,
  },
  {
    imagen: "/img/menues/cheddar.jpg",
    nombre: "Milanesa cheddar",
    ingredientes: [
      "muzzarella",
      "cheddar",
      "panceta crocante",
      "cebollita de verdeo",
    ],
    precio: 1518,
  },
  {
    imagen: "/img/menues/napolitana.png",
    nombre: "Milanesa napolitana",
    ingredientes: ["Salsa fileto", "muzzarella", "jamón cocido", "orégano"],
    precio: 1337,
  },
  {
    imagen: "/img/menues/liviana.jpg",
    nombre: "Milanesa liviana",
    ingredientes: [
      "muzzarella",
      "rodajas de tomate",
      "rucula fresca",
      "parmesano",
      "aceite de oliva",
    ],
    precio: 1337,
  },
  {
    imagen: "/img/menues/americana.jpg",
    nombre: "Milanesa americana",
    ingredientes: ["cebolla caramelizada", "panceta crocante", "huevo frito"],
    precio: 1400,
  },
  {
    imagen: "/img/menues/patagonica.jpg",
    nombre: "Milanesa patagonica",
    ingredientes: [
      "muzzarella",
      "rúcula",
      "lomito ahumado",
      "tomate con hierbas",
      "salsa de mayonesa ahumada",
    ],
    precio: 1518,
  },
  {
    imagen: "/img/menues/a caballo.jpg",
    nombre: "Milanesa a caballo",
    ingredientes: ["2 huevos fritos"],
    precio: 1337,
  },
  {
    imagen: "/img/menues/Fondue de Quesos.jpg",
    nombre: "Milanesa Fondue de Quesos",
    ingredientes: [
      "muzzarella",
      "provolone",
      "queso azul",
      "sardo",
      "ciboulette",
    ],
    precio: 1518,
  },
  {
    imagen: "/img/menues/la Gringa.png",
    nombre: "Milanesa la Gringa",
    ingredientes: [
      "salsa barbacoa",
      "queso cheddar",
      "panceta crocante",
      "huevo frito",
    ],
    precio: 1518,
  },
  {
    imagen: "/img/menues/Tex Mex.jpg",
    nombre: "Milanesa Tex Mex",
    ingredientes: ["guacamole", "queso blanco", "salsa criolla", "semillas"],
    precio: 1518,
  },
  {
    imagen: "/img/menues/Criminal.jpg",
    nombre: "Milanesa Criminal",
    ingredientes: [
      "muzzarella",
      "cheddar",
      "cebolla morada y verdeo",
      "huevos revueltos",
      "panceta",
      "pimentón",
    ],
    precio: 1518,
  },
  {
    imagen: "/img/menues/provolone.jpg",
    nombre: "Milanesa provolone",
    ingredientes: ["muzzarella", "provolone fundido", "criolla", "perejil"],
    precio: 1400,
  },
  {
    imagen: "/img/menues/fugazzeta.jpg",
    nombre: "Milanesa fugazzeta",
    ingredientes: ["muzzarella", "colchon de cebolla", "oregano"],
    precio: 1400,
  },
  {
    imagen: "/img/menues/Vegana Clásica.png",
    nombre: "Milanesa Vegana Clásica",
    ingredientes: ["perejil", "limón"],
    precio: 1320,
  },
  {
    imagen: "/img/menues/Vegana Texmex.png",
    nombre: "Milanesa Vegana Texmex",
    ingredientes: [
      "guacamole",
      "cebolla morada",
      "tomate",
      "ciboulette",
      "mix de semillas",
    ],
    precio: 1320,
  },
  {
    imagen: "/img/menues/Vegana tranca.png",
    nombre: "Sándwich Milanesa Vegana Tranca",
    ingredientes: ["lechuga", "tomate", "guacamole"],
    precio: 1095,
  },
  {
    imagen: "/img/menues/Vegana recargado.png",
    nombre: "Sándwich Milanesa Vegana Recargado",
    ingredientes: [
      "cebolla caramelizada",
      "salsa barbacoa",
      "tomate",
      "pepinillos",
    ],
    precio: 1095,
  },
  {
    imagen: "/img/menues/Sándwich de milanesa.png",
    nombre: "Sándwich de milanesa",
    ingredientes: [
      "peceto o pollo",
      "lechuga",
      "tomate",
      "papas fritas",
      "bebida a elección",
    ],
    precio: 900,
  },
  {
    imagen: "/img/menues/Doble Criminal.jpg",
    nombre: "Sándwich Doble Criminal",
    ingredientes: [
      "sésamo",
      "doble milanesa de ternera o pollo",
      "cheddar",
      "panceta",
      "cebolla caramelizada",
      "barbacoa",
      "huevo frito",
      "papas fritas",
    ],
    precio: 1000,
  },
  {
    imagen: "/img/menues/Doble tex mex.jpg",
    nombre: "Sándwich Doble Tex-Mex",
    ingredientes: [
      "sésamo",
      "doble milanesa de ternera o pollo",
      "muzzarella",
      "nachos",
      "cebolla morada",
      "guacamole",
      "papas fritas",
    ],
    precio: 1000,
  },
  {
    imagen: "/img/menues/Sandwich Crispy.png",
    nombre: "Sandwich Crispy",
    ingredientes: [
      "doble de milanesa de pollo y muzza",
      "empanado crocante",
      "cebolla crispy",
      "panceta",
      "barbacoa",
      "huevo frito",
      "papas fritas",
    ],
    precio: 1090,
  },
  {
    imagen: "/img/menues/Sándwich Superclásico.png",
    nombre: "Sándwich Superclásico",
    ingredientes: [
      "ternera o pollo",
      "muzarella",
      "jamon cocido",
      "lechuga",
      "tomate",
      "papas fritas",
    ],
    precio: 1000,
  },
];

const menu = () => {
  return (
    <div className="w-full">
      <p className="text-center py-8 text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide ">
        Nuestros Productos
      </p>
      <TipoMilaBar />
      <MenuList menuList={carta} />
    </div>
  );
};
export default menu;

// {
//     imagen: "roquefort",
//     nombre: "roquefort",
//     ingredientes: [
//       "salsa de tomate",
//       "muzzarella",
//       "roquefort",
//       "rulos de jamon cocido",
//       "parmesano rallado",
//     ],
//   },
//   {
//     imagen: "4 quesos",
//     nombre: "4 quesos",
//     ingredientes: ["muzzarella", "cheddar", "roquefort", "parmesano"],
//   },
//   {
//     imagen: "5 quesos",
//     nombre: "5 quesos",
//     ingredientes: [
//       "muzzarella",
//       "cheddar",
//       "roquefort",
//       "parmesano",
//       "provolone",
//     ],
//   },
//   {
//     imagen: "calabresa",
//     nombre: "calabresa",
//     ingredientes: ["salsa de tomate", "muzzarella", "longaniza", "huevo duro"],
//   },
//   {
//     imagen: "vienesa",
//     nombre: "vienesa",
//     ingredientes: [
//       "salsa de tomate",
//       "muzzarella",
//       "salchichas",
//       "cebolla gratinada",
//       "mostaza",
//     ],
//   },

//   {
//     imagen: "morron y huevo",
//     nombre: "morron y huevo",
//     ingredientes: [
//       "salsa de tomate",
//       "muzzarella",
//       "morrones",
//       "jamon cocido",
//       "huevo picado",
//       "aji molido",
//     ],
//   },
//   {
//     imagen: "gran imperio",
//     nombre: "gran imperio",
//     ingredientes: [
//       "salsa de tomate",
//       "muzzarella",
//       "cheddar",
//       "panceta",
//       "4 huevos fritos",
//     ],
//   },
//   {
//     imagen: "la conquistadora",
//     nombre: "la conquistadora",
//     ingredientes: [
//       "salsa de tomate",
//       "muzzarella",
//       "bondiola",
//       "rodaja de tomate",
//       "albahaca",
//     ],
//   },
//   {
//     imagen: "jamon crudo",
//     nombre: "jamon crudo",
//     ingredientes: [
//       "salsa de tomate",
//       "muzzarella",
//       "jamon crudo",
//       "rucula",
//       "parmesano",
//     ],
//   },

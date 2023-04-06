import { productoServices } from "../servicios/producto-servicios.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const labelImageUrl = document.querySelector("[data-urlDescrp]");
const labelNombre = document.querySelector("[data-nombreDescrp]");
const labelPrecio = document.querySelector("[data-precioDescrp]");
const labelDescripcion = document.querySelector("[data-descrpDescrp]");

productoServices.listarUnProducto(id).then((datos) => {
    labelImageUrl.setAttribute("src", datos.imageUrl);
    labelNombre.innerHTML = datos.name;
    labelPrecio.innerHTML = datos.price;
    labelDescripcion.innerHTML = datos.description;
});


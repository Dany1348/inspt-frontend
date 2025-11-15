/*
function DetalleProduct(){
return (
    <h1>  Detalle del Producto</h1>
)

}

export default DetalleProduct;*/
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_ROUTES } from '../routes';

const ProductoDetalle = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(API_ROUTES.FIND_PRODUCT(id))
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato));
  },[id]);

  if(!producto)
    return <p>Cargando ......</p>
  
  return(
    <>
      <h2>Detalles del Producto Nro {id}</h2>
      <img src={producto.imagen} alt={producto.nombre} width={100} height={100} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
    </>
    
  );
}

export default ProductoDetalle;
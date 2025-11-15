
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_ROUTES } from '../routes';

const DetalleFactura = () => {
  
  const { id } = useParams();
  const [factura, setFactura] = useState({});

  useEffect(() => {
    fetch(API_ROUTES.FIND_FACTURA(id))
      .then(respuesta => respuesta.json())
      .then(dato => setFactura(dato));
  },[id]);

  if(!factura)
    return <p>Cargando ......</p>
  
  return(
    <>
      <h3>Detalles de la Factura Nro {id}</h3>
      <img src={factura.imagen} alt={factura.nombre} width={100} height={100} />
      <h3>{factura.nombre}</h3>
      <p>{factura.descripcion}</p>
    </>
    
  );
}

export default DetalleFactura;
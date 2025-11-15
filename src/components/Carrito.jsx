import { useContext, useState } from "react";
import { CarritoContext } from '../context/CarritoContext.jsx';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { API_ROUTES } from "../routes.js";

const Carrito = () => {
  let hoy = new Date();
  hoy = hoy.toDateString();
  const { usuario } = useAuthContext();
  const { carrito, eliminarDelCarrito ,vaciarCarrito } = useContext(CarritoContext);
  const [product, setProduct] = useState({});
  const [factura, setFactura] = useState({ fecha: hoy, cliente: usuario, productos: carrito, total: 0 });
  const navigate = useNavigate();

  const agregarTotal = (carrito) => {
    let total = 0;
    carrito.map(producto => {
      total = total + (producto.cantidad * producto.precio);
    })
    setFactura({ ...factura, total: total });
    return total;
  };

  const productoStock = async (p) => {
    const response = await fetch(API_ROUTES.FIND_PRODUCT(p.id));
    const data = await response.json();
    setProduct(data);
    console.log(" Este es el product encontrado  ", product);
    let nuevoStock = data.cantidad - p.cantidad;

    setProduct({ ...product, cantidad: nuevoStock });
    console.log(" Este es el nuevo stock ", product.cantidad);
    await fetch(API_ROUTES.UPDATE_PRODUCT(p.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    console.log(`Se actualizo el producto ${p.id}`);
  };

  const actualizarStock = (carrito) => {
    carrito.map(producto => {
      productoStock(producto);
    })
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let apagar = agregarTotal(carrito);
    setFactura({ ...factura, total: apagar });
    console.log(" Esto es a pagar ", apagar);
    actualizarStock(carrito);

    await fetch(API_ROUTES.CREATE_FACTURA, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(factura),
    });
    setFactura({});
    vaciarCarrito();
    navigate('/');
    alert (" Felicitaciones Excelente compra !!!");
    console.log(" Es la factura con la fecha :  ", factura);
    return factura;
  };

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.map((producto, indice) => (
        <div key={indice}>
          <img src={producto.imagen} alt={producto.nombre} height={80} width={80} />
          <p> {producto.nombre} : {producto.precio}$ : cantidad {producto.cantidad} </p>
          <button onClick={() => eliminarDelCarrito(indice)}>Eliminar</button>
        </div>
      ))}
      <button onClick={handleSubmit}>Doble click para comprar</button>
      <br></br>
      <Link to="/">Volver al Inicio</Link>
      <br></br>
      <Link to="/products/view">Volver a los productos</Link>
    </div>
  );
};

export default Carrito;
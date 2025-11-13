import { useContext ,useState} from "react";
import { CarritoContext } from '../context/CarritoContext.jsx';
import { Link } from 'react-router-dom';
import CreateFactura from "./CreateFactura.jsx";
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { API_ROUTES } from "../routes.js";

const Carrito = () => {
  let hoy = new Date();
        hoy = hoy.toDateString();
  const { usuario } = useAuthContext();
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext); 
  const [factura, setFactura] = useState({ fecha: hoy, cliente: usuario, productos: carrito, total: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hoy = new Date();
        hoy = hoy.toDateString();
        //console.log(" Esta es la fecha " , hoy);
        //setUser({ ...user, nombre: e.target.value })
        setFactura({...factura , fecha:hoy});
        setFactura({...factura , cliente:usuario});
        console.log( " Es la factura con la fecha :  " , factura);
        
        await fetch(API_ROUTES.CREATE_FACTURA, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(factura),
        });
        
        return <Navigate to="/" replace />;
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
      <Link to="/products/view"><button onClick={handleSubmit}>Comprar</button></Link>
         
            <Link to="/">Volver al Inicio</Link>
            <br></br>
            <Link to="/products/view">Volver a los productos</Link>
    </div>
  );
};

export default Carrito;
import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes.js';
//import { CarritoContext } from '../context/CarritoContext.jsx';


function DetalleFactura2() {

    const { id } = useParams();
    const [factura, setFactura] = useState({});

    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    //const [product, setProduct] = useState([]);
    const [product, setProduct] = useState(null);

    // Usar el contexto 
    //const { agregarAlCarrito } = useContext(CarritoContext);

    useEffect(() => {
        fetch(API_ROUTES.FIND_FACTURA(id))
            .then((res) => res.json())
            .then((data) => setFactura(data))
            .finally(() => setCargando(false));        
    }, [id]);
   /* 
      useEffect(() => {
        fetch(API_ROUTES.FIND_FACTURA(id))
      .then(respuesta => respuesta.json())
      .then(dato => setFactura(dato));
  },[id]);
*/

    if (cargando) return 'Cargando productos...';
    if (error) return error;

    const handleSearch = async (id) => {
        const response = await fetch(API_ROUTES.FIND_PRODUCT(id));
        const data = await response.json();
        setProduct(data);
        console.log(product);

    };

 

    return (
        <div>
            <h3>Productos en la Factura {id}</h3>
            { console.log(" Este es el factura cargado " ,factura)}
            <ul>
                {factura.productos.map((producto) => (
                    producto.cantidad > 0 ?
                    <li key={producto.id}>{producto.nombre} <p>   Precio : $ {producto.precio} </p> 
                        <img src={producto.imagen} height={80} width={80} alt={producto.nombre} />
                        <span> Cantidad : {producto.cantidad}</span>
                        {/*<button onClick={() => agregarAlCarrito(producto)} > Agregar</button> */}
                        {  /* <button onClick={()=> handleSearch(producto.id)} > Detalles</button>
                        <Link  to={`/products/detalle/`${producto.id}`} > Detalles </Link>*/}
                        <Link to={`/products/detalle/${producto.id}`} > Detalles </Link>
                    </li> : true 
                ))}
            </ul>
            <Link to="/">Volver al Inicio</Link>
            <br></br>
            <Link to="/facturass/view">Volver a lista de facturas</Link>
        </div>
    );
}

export default DetalleFactura2;

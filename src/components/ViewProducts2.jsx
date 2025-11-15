import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes.js';
import { CarritoContext } from '../context/CarritoContext.jsx';


function ViewProducts2() {
    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    //const [product, setProduct] = useState([]);
    const [product, setProduct] = useState(null);

    // Usar el contexto 
    const { agregarAlCarrito } = useContext(CarritoContext);

   /*  const cantidadEnUno = (productos) => {
  setCarrito(productos.map(item => 
    item.cantidad > 1 ? {...item, cantidad:  1} : item
  ));
}; */
    useEffect(() => {
        fetch(API_ROUTES.GET_ALL_PRODUCTS)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            //.then((products => cantidadEnUno(products)))
            .finally(() => setCargando(false));
    }, []);

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
            <h2>Productos en existencia</h2>
            <ul>
                {products.map((producto) => (
                    producto.cantidad > 0 ?
                    <li key={producto.id}>{producto.nombre} {producto.precio}
                        <img src={producto.imagen} height={80} width={80} alt={producto.nombre} />
                        <button onClick={() => agregarAlCarrito(producto)} > Agregar</button>
                        {  /* <button onClick={()=> handleSearch(producto.id)} > Detalles</button>
                        <Link  to={`/products/detalle/`${producto.id}`} > Detalles </Link>*/}
                        <Link to={`/products/detalle/${producto.id}`} > Detalles </Link>
                    </li> : true 
                ))}
            </ul>
            <Link to="/">Volver al Inicio</Link>
            <br></br>
            <Link to="/products/carrito">Ir al carrito</Link>
        </div>
    );
}

export default ViewProducts2;

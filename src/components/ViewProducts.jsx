import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes.js';

function ViewProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(API_ROUTES.GET_ALL_PRODUCTS)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h2>Productos en existencia</h2>
            <ul>
                {products.map((producto) => (
                    <li key={producto.id}>{producto.nombre} {producto.precio} - {producto.descripcion}</li>
                ))}
            </ul>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default ViewProducts;

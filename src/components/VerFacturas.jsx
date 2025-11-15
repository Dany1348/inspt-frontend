import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes.js';

function ViewFacturas() {
    const [facturas, setFacturas] = useState([]);

    useEffect(() => {
        fetch(API_ROUTES.GET_ALL_FACTURAS)
            .then((res) => res.json())
            .then((data) => setFacturas(data));
    }, []);

    return (
        <div>
            <h2>Facturas en la BD</h2>
            <ul>
                {facturas.map((factura) => (
                    <li key={factura._id}>Fecha : {factura.fecha}.     Cliente : {factura.cliente}. Productos :<Link to="/">[factura.productos]</Link>        Total :  {factura.total}</li>
                ))}
            </ul>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default ViewFacturas;

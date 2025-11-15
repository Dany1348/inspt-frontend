import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes.js';

function ViewFacturas() {
    const [facturas, setFacturas] = useState([]);
    const {cliente} = useParams();


    useEffect(() => {
        fetch(API_ROUTES.GET_ALL_FACTURAS)
            .then((res) => res.json())
            .then((data) => setFacturas(data));
    }, []);

    return (
        <div>
            <h2>Facturas del cliente {cliente} </h2>
            <ul>
                {facturas.map((factura) => (
                    factura.cliente == cliente ?
                    <li key={factura._id}>Fecha : {factura.fecha}.     Cliente : {factura.cliente}. Productos : <Link to={`/facturas/detalle/${factura._id}`} > Detalles factura</Link>        Total :  {factura.total}</li>
                    : false
                ))}
            </ul>
            <Link to="/facturass/view">Volver a la lista de facturas </Link>
        </div>
    );
}

export default ViewFacturas;

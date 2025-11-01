import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function UpdateProduct() {
    const [id, setId] = useState('');
    const [product, setProduct] = useState({ nombre: '', precio: '', descripcion: '' });

    const handleUpdate = async () => {
        await fetch(API_ROUTES.UPDATE_PRODUCT(id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
    };

    return (
        <div>
            <h2>Actualizar Usuario</h2>
            <input type="text" placeholder="Id" onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder="Nombre" onChange={(e) => setProduct({ ...product, nombre: e.target.value })} />
            <input type="number" placeholder="Precio" onChange={(e) => setProduct({ ...product, precio: e.target.value })} />
            <input type="email" placeholder="Descripcion" onChange={(e) => setProduct({ ...product, descripcion: e.target.value })} />
            <button onClick={handleUpdate}>Actualizar Producto </button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default UpdateProduct;

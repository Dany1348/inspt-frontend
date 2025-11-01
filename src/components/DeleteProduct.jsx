import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function DeleteProduct() {
    const [id, setId] = useState('');

    const handleDelete = async () => {
        await fetch(API_ROUTES.DELETE_PRODUCT(id), { method: 'DELETE' });
    };

    return (
        <div>
            <h2>Eliminar Producto</h2>
            <input type="text" placeholder="Id" onChange={(e) => setId(e.target.value)} />
            <button onClick={handleDelete}>Eliminar Producto</button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default DeleteProduct;

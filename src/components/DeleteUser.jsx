import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function DeleteUser() {
    const [dni, setDni] = useState('');

    const handleDelete = async () => {
        await fetch(API_ROUTES.DELETE_USER(dni), { method: 'DELETE' });
    };

    return (
        <div>
            <h2>Eliminar Usuario</h2>
            <input type="text" placeholder="DNI" onChange={(e) => setDni(e.target.value)} />
            <button onClick={handleDelete}>Eliminar</button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default DeleteUser;

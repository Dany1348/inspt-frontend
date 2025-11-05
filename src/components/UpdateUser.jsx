import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function UpdateUser() {
    const [dni, setDni] = useState('');
    const [user, setUser] = useState({ nombre: '', password: '', rol: '', correo: '' });

    const handleUpdate = async () => {
        await fetch(API_ROUTES.UPDATE_USER(dni), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
    };

    return (
        <div>
            <h2>Actualizar Usuario</h2>
            <input type="text" placeholder="DNI" onChange={(e) => setDni(e.target.value)} />
            <input type="text" placeholder="Nombre" onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <input type="text" placeholder="Rol" onChange={(e) => setUser({ ...user, rol: e.target.value })} />
            <input type="email" placeholder="Correo" onChange={(e) => setUser({ ...user, correo: e.target.value })} />
            <button onClick={handleUpdate}>Actualizar</button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default UpdateUser;

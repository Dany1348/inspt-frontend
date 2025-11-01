import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function CreateUser() {
    const [user, setUser] = useState({ dni: '', nombre: '', apellido: '', correo: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(API_ROUTES.CREATE_USER, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
    };

    return (
        <div>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="DNI" onChange={(e) => setUser({ ...user, dni: e.target.value })} />
                <input type="text" placeholder="Nombre" onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                <input type="text" placeholder="Apellido" onChange={(e) => setUser({ ...user, apellido: e.target.value })} />
                <input type="email" placeholder="Correo" onChange={(e) => setUser({ ...user, correo: e.target.value })} />
                <button type="submit">Crear</button>
            </form>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default CreateUser;

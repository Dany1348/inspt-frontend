import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function RegistrarUser() {
    const [user, setUser] = useState({ dni: '', nombre: '', password: '', rol: "cliente", correo: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(API_ROUTES.CREATE_USER, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        console.log(`Se registro el usuario ${user.dni}`);
    };

    return (
        <div>
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="DNI" onChange={(e) => setUser({ ...user, dni: e.target.value })} />
                <input type="text" placeholder="Nombre" onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                {/*<input type="hidden" placeholder="Rol" onChange={(e) => setUser({ ...user, rol: "cliente" })} />*/}
                <input type="email" placeholder="Correo" onChange={(e) => setUser({ ...user, correo: e.target.value })} />
                <button type="submit">Crear</button>
            </form>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default RegistrarUser;

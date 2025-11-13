import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

import { Navigate } from 'react-router-dom';

function CreateFactura(elcarrito) {
    //const [user, setUser] = useState({ dni: '', nombre: '', password: '', rol: '', correo: '' });
    const [factura, setFactura] = useState({ id: '', cliente: usuario, productos: elcarrito, total: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(API_ROUTES.CREATE_FACTURA, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(factura),
        });
        console.log( " Es el final del createFactura");
        return <Navigate to="/" replace />;
    };

    return (
        <div>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="DNI" onChange={(e) => setUser({ ...user, dni: e.target.value })} />
                <input type="text" placeholder="Nombre" onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <input type="text" placeholder="Rol" onChange={(e) => setUser({ ...user, rol: e.target.value })} />
                <input type="email" placeholder="Correo" onChange={(e) => setUser({ ...user, correo: e.target.value })} />
                <button type="submit">Crear</button>
            </form>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default CreateFactura;

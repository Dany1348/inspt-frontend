import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes.js';

function ViewUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_ROUTES.GET_ALL_USERS)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Usuarios Registrados</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.dni}>{user.nombre} {user.apellido} - {user.correo}</li>
                ))}
            </ul>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default ViewUsers;

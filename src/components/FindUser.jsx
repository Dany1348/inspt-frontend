import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function FindUser() {
    const [dni, setDni] = useState('');
    const [user, setUser] = useState(null);

    const handleSearch = async () => {
        const response = await fetch(API_ROUTES.FIND_USER(dni));
        const data = await response.json();
        setUser(data);
    };

    return (
        <div>
            <h2>Buscar Usuario</h2>
            <input type="text" placeholder="DNI" onChange={(e) => setDni(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {user && <div>{user.nombre} {user.apellido} - {user.correo}</div>}
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default FindUser;

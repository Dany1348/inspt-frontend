import { Link } from 'react-router-dom';

function HomeAdmin() {
    return (
        <div>
            <h1>CRUD Administrador</h1>
            <ul>
                <li><Link to="/view">Ver Todos los Usuarios</Link></li>
                <li><Link to="/create">Crear Usuario</Link></li>  
                <li><Link to="/find">Buscar Usuario</Link></li>
                <li><Link to="/update">Actualizar Usuario</Link></li>
                <li><Link to="/delete">Eliminar Usuario</Link></li>
                <li><Link to="/products/view">Ver Todos los Productos</Link></li>
                <li><Link to="/products/find">Buscar Producto</Link></li>
            </ul>
        </div>
    );
}

export default HomeAdmin;

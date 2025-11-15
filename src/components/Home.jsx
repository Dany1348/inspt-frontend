import { Link } from 'react-router-dom';
import ViewProducts2 from './ViewProducts2';

function Home() {
    return (
        <div>
            <h1>CRUD General</h1>
            <ul>
                
                <li><Link to="/products/view">Ver Todos los Productos</Link></li>
                <li><Link to="/products/find">Buscar Producto</Link></li>
                <li><Link to="/registrar">Registrarse</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <ViewProducts2/>
        </div>
    );
}

export default Home;

/*
                <li><Link to="/view">Ver Todos los Usuarios</Link></li>
                <li><Link to="/create">Crear Usuario</Link></li>  
                <li><Link to="/find">Buscar Usuario</Link></li>
                <li><Link to="/update">Actualizar Usuario</Link></li>
                <li><Link to="/delete">Eliminar Usuario</Link></li>
                <li><Link to="/products/view">Ver Todos los Productos</Link></li>
                <li><Link to="/products/create">Ingresar un Producto</Link></li>
                <li><Link to="/products/find">Buscar Producto</Link></li>
                <li><Link to="/products/update">Actualizar Producto</Link></li>
                <li><Link to="/products/delete">Eliminar Producto</Link></li>



*/

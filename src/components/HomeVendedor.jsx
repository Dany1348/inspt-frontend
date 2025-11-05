import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>CRUD Vendedor</h1>
            <ul>
                <li><Link to="/products/view">Ver Todos los Productos</Link></li>
                <li><Link to="/products/create">Ingresar un Producto</Link></li>
                <li><Link to="/products/find">Buscar Producto</Link></li>
                <li><Link to="/products/update">Actualizar Producto</Link></li>
                <li><Link to="/products/delete">Eliminar Producto</Link></li>
            </ul>
        </div>
    );
}

export default Home;

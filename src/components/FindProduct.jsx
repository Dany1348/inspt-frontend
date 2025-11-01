import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function FindProduct() {
    const [id, setId] = useState('');
    const [product, setProduct] = useState(null);

    const handleSearch = async () => {
        const response = await fetch(API_ROUTES.FIND_PRODUCT(id));
        const data = await response.json();
        setProduct(data);
    };

    return (
        <div>
            <h2>Buscar Producto</h2>
            <input type="text" placeholder="Id" onChange={(e) => setId(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {product && <div>{product.nombre} {product.precio} - {product.descripcion}</div>}
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default FindProduct;

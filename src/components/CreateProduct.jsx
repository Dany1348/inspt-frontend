import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function CreateProduct() {
    const [product, setProduct] = useState({ id: '', nombre: '', precio: '',imagen: '',categoria: '', descripcion: '', cantidad: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(API_ROUTES.CREATE_PRODUCT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
    };

    return (
        <div>
            <h2>Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Id" onChange={(e) => setProduct({ ...product, id: e.target.value })} />
                <input type="text" placeholder="Nombre" onChange={(e) => setProduct({ ...product, nombre: e.target.value })} />
                <input type="number" placeholder="Precio" onChange={(e) => setProduct({ ...product, precio: e.target.value })} />
                <input type="text" placeholder="Imagen" onChange={(e) => setProduct({ ...product, imagen: e.target.value })} />
                <input type="text" placeholder="Categoria" onChange={(e) => setProduct({ ...product, categoria: e.target.value })} /> 
                <input type="text" placeholder="Descripcion" onChange={(e) => setProduct({ ...product, descripcion: e.target.value })} />
                <input type="number" placeholder="Cantidad" onChange={(e) => setProduct({ ...product, cantidad: e.target.value })} />
                <button type="submit">Crear</button>
            </form>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default CreateProduct;

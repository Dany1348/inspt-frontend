import { createContext, useState } from "react";
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto

 

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addQuantity = (id) => {
  setCarrito(carrito.map(item => 
    item.id === id ? {...item, cantidad: item.cantidad + 1} : item
  ));
};



  const incluyeProducto = (id) => {
    let esta = false;
    carrito.map(producto =>
      //producto.id === id ? true ;
      {if (producto.id === id )
        esta = true }
    );
        console.log("variable booleana de incluye " ,esta);
        console.log(carrito);
    return esta;  
  }

  const agregarAlCarrito = (producto) => {
   let esta = incluyeProducto(producto.id)
   if (!esta){
    producto = {...producto , cantidad: 1};
    setCarrito([...carrito, producto]);

    console.log( "Carrito desde incluye carrito false " , carrito); 
   }
    else {
      addQuantity(producto.id) ;
    }

    console.log(" Carrito al final del agregar carrito" , carrito);
  }; 
  
  /*
  const addQuantity = (id) => {
  setCartItems(cartItems.map(item => 
    item.id === id ? {...item, quantity: item.quantity + 1} : item
  ));
};

const removeQuantity = (id) => {
  setCartItems(cartItems.map(item => 
    item.id === id && item.quantity > 1 
      ? {...item, quantity: item.quantity - 1} 
      : item
  ));
};

const removeFromCart = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id));
};  con esto modificas el carrito
  */
  // Usamos filter() para crear un nuevo array que excluye el elemento
  // con el índice dado.
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

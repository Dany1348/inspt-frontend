import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
// se ve en clase 7 no se pide para la Pre-entrega
const RutaProtegida = ({children}) => {
  const { usuario ,rol } = useAuthContext();

  console.log("Usuario Context" ,usuario);
  console.log("Rol Context" ,rol);
  if(rol != "vendedor")
    return <Navigate to="/login" replace />;
  
  return children;
}

export default RutaProtegida;
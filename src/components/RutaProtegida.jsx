import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
// se ve en clase 7 no se pide para la Pre-entrega
const RutaProtegida = ({children}) => {
  const { usuario } = useAuthContext();
  console.log(usuario);
  
  if(usuario != "admin")
    return <Navigate to="/login" replace />;
  
  return children;
}

export default RutaProtegida;
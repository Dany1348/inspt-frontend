import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const RutaProtegidaLogin = ({ children }) => {
    const { usuario, rol } = useAuthContext();

    console.log("Usuario Context", usuario);
    console.log("Rol Context", rol);

    if (rol == "admin")
        return <Navigate to="/admin" replace />;
    else if (rol == "vendedor")
        return <Navigate to="/vendedor" replace />;
    else if (rol == "cliente")
        return <Navigate to="/" replace />;
    return children;
}

export default RutaProtegidaLogin;
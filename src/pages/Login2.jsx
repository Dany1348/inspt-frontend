import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { API_ROUTES } from '../routes';


const Login = () => {
  //const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [dni, setDni] = useState('1');
  const [user, setUser] = useState({ dni: '',  password: '' })
  

  const  {login } = useAuthContext();
  //const logout  = useAuthContext();
  const navigate = useNavigate();
  
      const handleSearch = async (evento) => {
        evento.preventDefault();
        console.log(" Entramos aca otra vez " , user.dni , user.password  );
        try{
           const response = await fetch(API_ROUTES.LOGIN_USER(user.dni), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            //body: JSON.stringify({ dni: dni,  password: contrasenia }),
        });
        console.log("Este es el user que se envia ", user);
        
        const data = await response.json();
        setUser(data);
        console.log(" LLegamos aca con la data  " ,data.rol);
        console.log(" LLegamos aca con la data  " ,data);
            if(data.rol == 'admin') {
      login(user.dni);
      navigate('/admin');
    } else if(data.rol == 'vendedor') {
      login(user.dni);
      navigate('/vendedor');
    } else{
      alert('Usuario o Contraseña invalido');
    }
        }catch (error)
        {console.log(" Entramos aca por eso el error " );
          console.error(error);
        }  
    }; 

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    // Simulamos la Autenticacion
    if(usuario == 'admin' && contrasenia == '1234') {
      login(usuario);
      navigate('/admin');
    } else if(usuario == 'vende' && contrasenia == '1234') {
      login(usuario);
      navigate('/vendedor');
    } else{
      alert('Usuario o Contraseña invalido');
    }
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <h3>Iniciar Sesion</h3>
    {/* <label htmlFor=''>Usuario</label>
       <input 
          type='text'
          value={dni}
          onChange={(evento) => setDni(evento.target.value)}
        />
       <label htmlFor=''>Contraseña</label>
       <input 
          type='text'
          value={contrasenia}
          onChange={(evento) => setContrasenia(evento.target.value)}
        /> */}
        <input type="text" placeholder="DNI" onChange={(e) => setUser({ ...user, dni: e.target.value })} />             
        <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />     
 
       <button type='submit'>Iniciar Sesion</button>
      </form>
    </>    
  );
}

export default Login;


/* 

 <input type="text" value={dni} placeholder="DNI" onChange={(e) => setDni(e.target.value )} />
 <input type="text" placeholder="DNI" onChange={(e) => setUsuario({ ...usuario, dni: e.target.value })} />             
<input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />     
        
*/


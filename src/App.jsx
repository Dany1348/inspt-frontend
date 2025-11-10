import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HomeAdmin from './components/HomeAdmin';
import HomeVendedor from './components/HomeVendedor';
import Login from './pages/Login';
import ViewUsers from './components/ViewUsers';
import CreateUser from './components/CreateUser';
import FindUser from './components/FindUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import ViewProducts from './components/ViewProducts';
import ViewProducts2 from './components/ViewProducts2';
import Carrito from './components/Carrito';
import CreateProduct from './components/CreateProduct';
import FindProduct from './components/FindProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';
import RutaProtegida from './components/RutaProtegida';
import RegistrarUser from './components/RegistrarUser';
import './App.css'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/admin"
            element={
              <RutaProtegida >
                <HomeAdmin />
              </RutaProtegida>
            }
          />
          <Route path="/vendedor" element={<HomeVendedor />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/view' element={<ViewUsers/>}></Route>
          {/*<Route path="/create" element={<CreateUser />} />*/}
          <Route
            path="/create"
            element={
              <RutaProtegida >
                <CreateUser />
              </RutaProtegida>
            }
          />
          <Route path="/registrar" element={<RegistrarUser />} />
          <Route path="/find" element={<FindUser />} />
          <Route path="/update" element={<UpdateUser />} />
         {/* <Route path="/delete" element={<DeleteUser />} />*/}
          <Route
            path="/delete"
            element={
              <RutaProtegida >
                <DeleteUser />
              </RutaProtegida>
            }
          />
          <Route path='/products/view' element={<ViewProducts2/>}></Route>
          <Route path='/products/carrito' element={<Carrito/>}></Route>
          <Route path='/products/create' element={<CreateProduct/>}></Route>
          <Route path='/products/find' element={<FindProduct/>}></Route>
          <Route path='/products/update' element={<UpdateProduct/>}></Route>
          <Route path='/products/delete' element={<DeleteProduct/>}></Route>
        </Routes>
      
      <p className="read-the-docs">
        Estamos comenzando con el frontend
      </p>
    </>
  )
}

export default App

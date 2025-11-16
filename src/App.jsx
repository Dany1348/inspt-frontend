import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HomeAdmin from './components/HomeAdmin';
import HomeVendedor from './components/HomeVendedor';
import Login from './pages/Login';
import Login2 from './pages/Login2';
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
import RutaProtegidaV from './components/RutaProtegidaV';
import RutaProtegidaC from './components/RutaProtegidaC';
import RegistrarUser from './components/RegistrarUser';
import DetalleProduct from './components/DetalleProduct';
import ViewFacturas from './components/VerFacturas';
import ViewFacturasCliente from './components/VerFacturasCliente';
import DetalleFactura2 from './components/DetalleFactura2';
import './App.css'
import Footer from './components/Footer';



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home /> }></Route>
          <Route path="/admin"
            element={
              <RutaProtegida >
                <HomeAdmin />
              </RutaProtegida>
            }
          />
          <Route path="/vendedor"
           element={
            <RutaProtegidaV>
                  <HomeVendedor />
            </RutaProtegidaV>}
          />
          {/*<Route path="/login2" element={<Login />}></Route> */} 
          <Route path="/login" element={<Login2 />}></Route>
          {/*<Route path='/view' element={<ViewUsers/>}></Route> */}
          <Route path="/view"
            element={
              <RutaProtegida >
                <ViewUsers/>
              </RutaProtegida>
            }
          />
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
          {/*<Route path="/update" element={<UpdateUser />} /> */}
          <Route
            path="/update"
            element={
              <RutaProtegida >
                <UpdateUser />
              </RutaProtegida>
            }
          />
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
          {/*<Route path='/products/carrito' element={<Carrito/>}></Route>*/}
          <Route path="/products/carrito"
           element={
            <RutaProtegidaC>
                  <Carrito/>
            </RutaProtegidaC>}
          />
          {/*<Route path='/products/create' element={<CreateProduct/>}></Route> */}
          <Route path="/products/create"
           element={
            <RutaProtegidaV>
                  <CreateProduct/>
            </RutaProtegidaV>}
          />
          <Route path='/products/find' element={<FindProduct/>}></Route>
          {/*<Route path='/products/update' element={<UpdateProduct/>}></Route> */}
          <Route path="/products/update"
           element={
            <RutaProtegidaV>
                  <UpdateProduct/>
            </RutaProtegidaV>}
          />
          {/*<Route path='/products/delete' element={<DeleteProduct/>}></Route> */}
          <Route path="/products/delete"
           element={
            <RutaProtegidaV>
                  <DeleteProduct/>
            </RutaProtegidaV>}
          />
          <Route path='/products/detalle/:id' element={<DetalleProduct/>}></Route>
          <Route path='/facturass/view' element={<ViewFacturas/>}></Route>
          <Route path='/facturass/view/:cliente' element={<ViewFacturasCliente/>}></Route>
          <Route path='/facturas/detalle/:id' element={<DetalleFactura2/>}></Route>
        </Routes>
            <Footer></Footer>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App

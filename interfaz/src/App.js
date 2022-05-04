import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";

import Header from "./Components/Header";

import Login from './Pages/LoginPage';
import Admin  from './Pages/AdminPage';
import Empleado  from './Pages/ClerkPage';
import NotFoundPage from './Pages/NotFoundPage';
import RecoveryPassword from './Pages/PasswordPage';

import ColumnRegistros from './Components/ColumnRegistros';
import CoumnUsuarios from './Components/ColumnUsuarios';

export default class App extends Component {
  
  render(){
    return (      
      <BrowserRouter >
  
        <Header />
  
        <Routes>
          <Route path ='/' element={ <Login />}  />

          <Route path='/Admin' element={<Admin />}/>
          <Route path="/Admin/Registros" element={<ColumnRegistros/>}/>
          <Route path="/Admin/Usuarios" element={<CoumnUsuarios/>}/>
          <Route path='/Empleado' element={<Empleado />} />
          <Route path='/RecoveryPassword' element={ <RecoveryPassword /> } />
          <Route path='*' element={<NotFoundPage/> }></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";

import Login from './Pages/LoginPage';
import Admin  from './Pages/AdminPage';
import Empleado  from './Pages/ClerkPage';
import NotFoundPage from './Pages/NotFoundPage';
import RecoveryPassword from './Pages/PasswordPage';



function App() {
  return (

    <BrowserRouter >

      <Header />

      <Routes>
        <Route path ='/' element={ <Login />}  />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Empleado' element={<Empleado />} />
        <Route path='/RecoveryPassword' element={ <RecoveryPassword /> } />
        <Route path='*' element={<NotFoundPage/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
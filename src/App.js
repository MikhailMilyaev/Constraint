import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Lending from './Lending/Lending';
import Login from './Lending/Auth/Login/Login';
import Registration from './Lending/Auth/Registration/Registration';
// доступ авторизованным пользователям и все проверкки данных + связь с бд и сервером
function App() {


  
  return (
    <Routes>
      <Route path='/' element={<Lending />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Lending from './Lending/Lending';
import Login from './Lending/pages/Login/Login';
import Registration from './Lending/pages/Registration/Registration';
// навигацию на лендинге по разделам осталось и доступ авторизованным 
// пользователям и все проверкки данных + связь с бд и сервером
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
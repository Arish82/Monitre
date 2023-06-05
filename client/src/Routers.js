import React from 'react'
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/HomePage/Home';
import TransactionForm from './components/TransactionForm';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/transaction-form' element={<TransactionForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
import React from 'react'
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/HomePage/Home';
import TransactionForm from './components/TransactionForm';
import LeftSidebar from './components/LeftSidebar';

const Routers = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <LeftSidebar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/transaction-form' element={<TransactionForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Routers
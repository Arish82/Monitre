import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage/Login';
import Home from './pages/HomePage/Home';
import TransactionForm from './components/TransactionForm';
import LeftSidebar from './components/LeftSidebar';
import LandingPage from './pages/LandingPage/LandingPage';
import Registration from './pages/Registration/Registration';

const Routers = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <LeftSidebar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/masthead' element={<LandingPage/>}/>
            <Route path='/transaction-form' element={<TransactionForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Routers
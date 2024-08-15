import React, {useState, useEffect} from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';



import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Navbar from './components/Navbar';
import Account from './pages/account';
import Follow from './pages/follow';
import Blogs from './pages/blogs';


function App() {

  const { pathname, key } = useLocation();

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes 
        location={pathname}
      >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="account" element={<Account />} />
        <Route path="follow" element={<Follow />} />
        <Route path="blogs" element={<Blogs />} />

      </Routes>
    </>
  );
}

export default App;

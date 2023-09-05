import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react'
import Home from '../pages/Home/Home'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

export default function RouteManager() {
  return (
    <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={
                    <Home/>
                } />
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

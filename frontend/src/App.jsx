import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signin from './components/Signin.jsx'
import Navbar from './components/Navbar.jsx'
import Graphs from './components/graphs.jsx'
function App() {
  return (
<div className="container">
  <section className="routesSide">
    <Navbar/>
  </section>
  <main>
      <Routes>
              < Route path="/" element={<Home/>} />
              < Route path="/Signin" element={<Signin />} />
              < Route path="/Login" element={<Login/>} />
              < Route path="/Graphs" element={<Graphs/>} />
      </Routes>
  </main>
</div>
  )
}

export default App;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home"
import About from "../pages/about"
import Recipes from "../pages/recipes"
const mainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element= {<About />} />
        <Route path='/recipes' element = {<Recipes />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default mainRoutes

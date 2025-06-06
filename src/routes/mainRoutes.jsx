import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home"

const mainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element= {<Home />}/>
    </Routes>
  )
}

export default mainRoutes

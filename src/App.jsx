import React from 'react'
import MainRoutes from './routes/mainRoutes.jsx'

const App = () => {
  return (
    <div className='bg-amber-200 min-h-screen'>
        <h1 className='text-3xl font-bold'>My Recipe App</h1>
      <MainRoutes />
    </div>
  )
}

export default App

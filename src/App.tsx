import { useState } from 'react'
import { Navigate,Route,useRoutes,Routes,Link } from 'react-router-dom'
import routes from './router/routes'

function App() {
  const element=useRoutes(routes)
  return (
    <div className="max-w-xl mx-auto mt-3">
      {element}
    </div>
  )
}

export default App

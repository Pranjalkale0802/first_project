import { useState } from 'react'


import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App

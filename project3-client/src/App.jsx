import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Vaccines from './pages/Vaccines'

// import IsPrivate from './components/IsPrivate'
import IsAnon from './components/IsAnon'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/vaccines" element={<Vaccines />} />
        
      </Routes>
    </div>

  )
}
//protect page pending
export default App


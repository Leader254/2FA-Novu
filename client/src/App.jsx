import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Dashboard from '../components/Dashboard'
import PhoneVerify from '../components/PhoneVerify'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/phone/verify" element={<PhoneVerify />} />
      </Routes>
      
    </Router>
  )
}

export default App

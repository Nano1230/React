import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App() {
  const estaLogueado = localStorage.getItem('token')

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            estaLogueado ? (
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/sobre"
          element={
            estaLogueado ? (
              <>
                <Navbar />
                <Sobre />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Login() {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleLogin() {
    try {
      const respuesta = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usuario, password: contrasena }),
      })

      const datos = await respuesta.json()

      if (respuesta.ok) {
        localStorage.setItem('token', datos.token)
        navigate('/home')
      } else {
        setError('Usuario o contraseña incorrectos')
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor')
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10, gap: 2 }}>
      <Typography variant="h4">Iniciar Sesión</Typography>

      <TextField
        label="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <TextField
        label="Contraseña"
        type="password"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />

      {error && <Typography color="error">{error}</Typography>}

      <Button variant="contained" onClick={handleLogin}>
        Entrar
      </Button>
    </Box>
  )
}

export default Login

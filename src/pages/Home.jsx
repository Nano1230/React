import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MiBoton from '../components/MiBoton'

function Home() {
  const [mensaje, setMensaje] = useState('Hola, bienvenido a la página de inicio')

  function cambiarMensaje() {
    setMensaje('El mensaje fue actualizado correctamente!')
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Inicio
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {mensaje}
      </Typography>

      <MiBoton texto="Actualizar mensaje" onClick={cambiarMensaje} />
    </Box>
  )
}

export default Home

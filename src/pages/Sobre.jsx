import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Sobre() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sobre Nosotros
      </Typography>
      <Typography variant="body1">
        Esta es una aplicación de práctica hecha con React y Material UI.
      </Typography>
    </Box>
  )
}

export default Sobre

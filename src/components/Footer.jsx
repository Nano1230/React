import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2">
        Mi App hecha con React
      </Typography>
    </Box>
  )
}

export default Footer

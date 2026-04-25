import Button from '@mui/material/Button'

function MiBoton({ texto, onClick }) {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      {texto}
    </Button>
  )
}

export default MiBoton

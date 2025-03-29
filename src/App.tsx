//import { Button } FROM "@mui/material"; //Importacion nombrada
//import Button from "@mui/material/Button"; //Importación por defecto

import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Container, Typography } from "@mui/material";
import Footer from "./components/Footer";

/*
      <h1>Hola Heber</h1>
      <Typography variant="h3" color="primary">H3 Título</Typography>
      <Button variant="contained" color="error">Mi primer button</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <hr/>*/

export default function App() {

  return (
    <Container>
      <Footer></Footer>
    </Container>    
  );
}
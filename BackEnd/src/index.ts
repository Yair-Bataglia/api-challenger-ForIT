const cors = require('cors');
import express from 'express';
import usersRoute from './routes/usersRoute'

const app = express()

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:5173',  // Permite solicitudes desde localhost:5173 (puedes agregar más orígenes si es necesario)
    methods: ['GET', 'POST'],        // Especifica qué métodos HTTP se permiten
    allowedHeaders: ['Content-Type'] // Especifica los encabezados permitidos
  };
  
  // Habilitar CORS usando las opciones anteriores
  app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/api', usersRoute);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})
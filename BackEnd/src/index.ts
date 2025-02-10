import express from 'express';
import usersRoute from './routes/usersRoute'

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/api', usersRoute);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})
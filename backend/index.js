const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// ← Agrega esta línea para servir imágenes
app.use('/uploads', express.static('uploads'));

// Rutas
const productosRoutes = require('./routes/db.routes');
app.use('/api/productos', productosRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend corriendo correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
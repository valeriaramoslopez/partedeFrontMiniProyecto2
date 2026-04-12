const express = require('express');
const router = express.Router();
const db = require('../db');

// GET - todos los productos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

// GET - producto por id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM productos WHERE id = ?',
      [req.params.id]
    );
    if (rows.length === 0)
      return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar' });
  }
});

// POST - crear producto
router.post('/', async (req, res) => {
  try {
    const { nombre, categoria, editorial, tomo, precio, stock, imagen, descripcion, disponible } = req.body;
    const [result] = await db.query(
      'INSERT INTO productos (nombre, categoria, editorial, tomo, precio, stock, imagen, descripcion, disponible) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nombre, categoria, editorial, tomo, precio, stock, imagen, descripcion, disponible]
    );
    res.status(201).json({ id: result.insertId, mensaje: 'Producto creado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al insertar' });
  }
});

// PUT - actualizar producto
router.put('/:id', async (req, res) => {
  try {
    const { nombre, categoria, editorial, tomo, precio, stock, imagen, descripcion, disponible } = req.body;
    const [result] = await db.query(
      'UPDATE productos SET nombre=?, categoria=?, editorial=?, tomo=?, precio=?, stock=?, imagen=?, descripcion=?, disponible=? WHERE id=?',
      [nombre, categoria, editorial, tomo, precio, stock, imagen, descripcion, disponible, req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ mensaje: 'Actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
});

// DELETE - eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query(
      'DELETE FROM productos WHERE id = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
});

module.exports = router;
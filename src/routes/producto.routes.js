const express = require('express');
const router = express.Router();

// Forzamos la búsqueda al nombre exacto de tu archivo físico:
const productoController = require('../controllers/producto.controller');

router.get('/', productoController.listar);
router.get('/:id', productoController.obtener);
router.post('/', productoController.crear);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;


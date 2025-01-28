const express = require('express');
const proyekController = require('../controllers/proyekController');
const router = express.Router();

router.get('/', proyekController.getAllProyek);
router.get('/:id_proyek', proyekController.getProyekById);
router.post('/', proyekController.createProyek);
router.put('/:id_proyek', proyekController.updateProyek);
router.delete('/:id_proyek', proyekController.deleteProyek);

module.exports = router;

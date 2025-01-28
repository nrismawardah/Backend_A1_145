const express = require('express');
const tugasController = require('../controllers/tugasController');
const router = express.Router();

router.get('/', tugasController.getAllTugas);
router.get('/:id_tugas', tugasController.getTugasById);
router.get('/proyek/:id_proyek', tugasController.getTugasByProyek);
router.get('/tim/:id_tim', tugasController.getTugasByTim);
router.post('/', tugasController.createTugas);
router.put('/:id_tugas', tugasController.updateTugas);
router.delete('/:id_tugas', tugasController.deleteTugas);

module.exports = router;

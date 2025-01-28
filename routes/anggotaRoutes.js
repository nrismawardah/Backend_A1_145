const express = require('express');
const anggotaController = require('../controllers/anggotaController');
const router = express.Router();

router.get('/', anggotaController.getAllAnggota);
router.get('/:id_anggota', anggotaController.getAnggotaById);
router.get('/team/:id_tim', anggotaController.getAnggotaByTim);
router.post('/', anggotaController.createAnggota);
router.put('/:id_anggota', anggotaController.updateAnggota);
router.delete('/:id_anggota', anggotaController.deleteAnggota);

module.exports = router;

const express = require('express');
const timController = require('../controllers/timController');
const router = express.Router();

router.get('/', timController.getAllTim);
router.get('/:id_tim', timController.getTimById);
router.post('/', timController.createTim);
router.put('/:id_tim', timController.updateTim);
router.delete('/:id_tim', timController.deleteTim);

module.exports = router;

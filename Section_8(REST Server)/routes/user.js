const { Router } = require('express');
const { userGet, userPut, userPatch, userDelete, userPost } = require('../controllers/userController');

const router = Router();

router.get('/', userGet);   // No se pone "()" porque pasamos la ref. a una función

router.post('/', userPost);   // No se pone "()" porque pasamos la ref. a una función

router.put('/:id', userPut);   // No se pone "()" porque pasamos la ref. a una función

router.delete('/', userDelete);   // No se pone "()" porque pasamos la ref. a una función

router.patch('/', userPatch);   // No se pone "()" porque pasamos la ref. a una función

module.exports = router;   // Esto se utiliza indirectamente en "node_modules", no quitar...
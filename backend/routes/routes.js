const express = require('express');
const router = express.Router();

let cons = require('../controller/controller.js');

router.get('/', cons.getAllTask);

router.post('/task', cons.createTask);

router.get('/task/:id', cons.getTaskById);

router.patch('/task/:id', cons.updateTask);

router.delete('/:taskid/delete', cons.deleteTask);



module.exports = router;
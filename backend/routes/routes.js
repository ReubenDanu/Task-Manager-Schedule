const express = require('express');
const router = express.Router();

let cons = require('../controller/controller.js');


router.get('/', cons.home);

router.post('/', cons.createTask);

router.get('/:taskid/get', cons.getTask);

router.patch('/:taskid/update', cons.updateTask);

router.delete('/:taskid/delete', cons.deleteTask);



module.exports = router;
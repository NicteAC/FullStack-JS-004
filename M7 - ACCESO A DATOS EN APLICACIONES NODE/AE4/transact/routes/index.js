const express = require('express');
const router = express.Router();

const maestro = require('./Maestro');

router.use('/maestro', maestro);

module.exports = router;
const express = require('express');
const router = express.Router();
const tasksRoutes = require('./posts');

router.use('/', tasksRoutes);

module.exports = router;
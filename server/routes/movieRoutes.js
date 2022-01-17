const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies')

// check in server for middleware  
router.get('/all', moviesController.index);
//router.get('/:id', moviesController.show);
router.post('/', moviesController.create);
router.delete('/:id', moviesController.destroy);

module.exports = router;
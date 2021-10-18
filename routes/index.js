const express = require('express');

const matrix = require('../controllers/matrices/matrix');
const processFileUpload = require('../middlewares/fileupload');

const router = express.Router();

router.post('/echo', processFileUpload, matrix.echo);
router.post('/flatten', processFileUpload, matrix.flatten);
router.post('/invert', processFileUpload, matrix.invert);
router.post('/multiply', processFileUpload, matrix.multiply);
router.post('/sum', processFileUpload, matrix.sum);

module.exports = router;

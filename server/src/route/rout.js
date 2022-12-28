const express = require('express');
const { createData, getData } = require('../controlles/data');

const router = express.Router();


router.post('/create', createData);

router.get('/get', getData);



module.exports = router
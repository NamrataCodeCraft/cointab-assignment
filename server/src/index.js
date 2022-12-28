const express = require('express')
const mongoose = require('mongoose');
const rout = require('./route/rout');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test').then(() => console.log('Db')).catch(err => console.log(err));


app.use('/', rout);


app.listen(2500, () => console.log('done'));
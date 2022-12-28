const mongoose = require('mongoose')


const datasSchema = new mongoose.Schema({
    data: {
        type: { String }
    }
},{timestamps:true});


module.exports = mongoose.model('data',datasSchema)
const mongoose = require('mongoose')


const datasSchema = new mongoose.Schema({
    gender: String,
    title: String,
    name: String,
    email: String,
    username: String,
    password: String,
    location: String,
    city: String,
    state: String,
    country: String,
    latitude: String,
    longitude: String,
    postcode: String,
    picture: String,
    age: Number,
    phone: String,
    cell: String,
    description: String,
    offset: String,
    date: String,
    uuid: String,
    salt: String,
    md5: String,
    sha1: String,
    sha256: String,






}, { timestamps: true });


module.exports = mongoose.model('data', datasSchema)
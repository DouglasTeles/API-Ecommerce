const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true
    }
})
module.exports = mongoose.model('User',Schema)
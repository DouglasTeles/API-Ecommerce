const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productName: {
        type: 'string',
        required: true
    },
    productDescription: {
        type: 'string'
    },
    productPrice:{
        type: 'number',
        required:true
    },
    productQuantity:{
        type: 'number', 
        required:true
    },
    producImage:{
        type: 'string', 
        
    },
    username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
module.exports = mongoose.model('product',Schema)

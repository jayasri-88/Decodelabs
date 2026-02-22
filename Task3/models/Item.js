const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Item', itemSchema);
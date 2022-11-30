// info needing to save 
const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    },
})
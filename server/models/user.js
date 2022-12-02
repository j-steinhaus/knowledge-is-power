// info needing to save 
const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
    type: String,
    required: true,

    },
})
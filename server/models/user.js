const mongoose = require('mongoose')
const { Schema } = mongoose;

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
});

const User = mongoose.model('User', userSchema);
module.exports = User;
const { __esModule } = require('module');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 10
    },
    email: {
        type: String,
        trim: true,
        maxlength: 50
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: number,
        default: 0
    },
    image: String,
    token: {
        type: String,

    },
    tokenExp: {
        type: number
    }
})

const User = mongoose.model('User', userSchema);
module.experts = { User }

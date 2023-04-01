import mongoose from 'mongoose'

const user = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    quotes:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quote'
    }],
    journals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'journal'
    }],
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'thought'
    }]
},{timestamps:true})

const User = mongoose.model('user',user)

export default User 
const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    cPassword: {
        type: String,
        require: true
    },
}, {timestamps: true});

const User= new mongoose.model('User', UserSchema);

module.exports = User;
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');

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
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
}, {timestamps: true});

UserSchema.pre('save', function(next){
    if(this.isModified('password')){
        var salt = bcrypt.genSaltSync(12);
        this.password = bcrypt.hashSync(this.password,salt);
        this.cPassword = bcrypt.hashSync(this.cPassword,salt);
    }
    next();
})

UserSchema.methods.generateWebToken= async function(){
    try{
        const token = await jwt.sign({_id: this.id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token: token});

        await this.save()
        return token;
    }catch(err){
        console.log(err);
    }
}

const User= new mongoose.model('User', UserSchema);

module.exports = User;
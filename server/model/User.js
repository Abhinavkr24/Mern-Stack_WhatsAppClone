import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    aud: {
        type: String
    },
    azp: {
        type: String
        
    },
    email: {
        type: String
        
    },
    email_verified: {
        type: Boolean
        
    },
    exp: {
        type: Number,
        required: true
    },
    family_name: {
        type: String
        
    },
    given_name: {
        type: String,
        required: true
    },
    iat: {
        type: Number,
        required: true
    },
    iss: {
        type: String
    },
    jti: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    nbf: {
        type: Number
       
    },
    picture: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    }
})

const user = mongoose.model('user', userSchema);

export default user;

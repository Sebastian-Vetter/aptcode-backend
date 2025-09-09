import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: ({
        type: String,
        required: true,
    }),
    lastName: ({
        type: String,
        required: true,
    }),
    email: ({
        type: String,
        required: true,
        unique: true,
    }),
    password: ({
        type: String,
        required: true,
        minlength: 8,
    }),
    phoneNumber: ({
        type: Number,
        required: true,
    }),
    passwordConfirm: ({
        type: String,
        required: true,
    })
}, {collection: 'users'});

export const userModel = mongoose.model('UserType', userSchema);
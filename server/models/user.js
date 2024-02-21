import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.model('users', userSchema);

export default userModel;
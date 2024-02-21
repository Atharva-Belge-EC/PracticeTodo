import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: [ "completed", "not-yet" ],
        default: "not-yet"
    }
})

const todoModel = mongoose.model('todo', todoSchema);

export default todoModel;
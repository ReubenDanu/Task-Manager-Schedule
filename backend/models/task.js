const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({
    nama: String,
    note: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
})


const task = mongoose.model("task", TaskSchema);

module.exports = task;
const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    title: String,
    body: String,
    refers_to: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    created: {
        type: Date,
        default: Date.now()
    },
    last_updated: {
        type: Date,
        default: Date.now()
    },
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }]



})

module.exports = mongoose.model("Note", NoteSchema)
const mongoose = require("mongoose")

const ResourceSchema = new mongoose.Schema({
    title: String,
    url: String,
    refers_to: { type: mongoose.Schema.Types.ObjectId, ref: 'Note' },
    created: {
        type: Date,
        default: Date.now()
    },
    last_updated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Resource", ResourceSchema)
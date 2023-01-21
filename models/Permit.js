const mongoose = require("mongoose")

const PermitSchema = new mongoose.Schema({
    title: String,
    substance: String,
    url: String,
    refers_to: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    created: {
        on_date: {
            type: Date,
            default: Date.now()
        },
        status: {
            type: String,
            default: 0
        }
    },
    last_updated: {
        on_date: {
            type: Date,
            default: Date.now()
        },
        status: String,
        by_public_figure: {
            name: {
                first: String,
                last: String
            },
            contact: {
                office: String,
                phone: String,
                email: String,
            }
        }
    }
})

module.exports = mongoose.model("Permit", PermitSchema)
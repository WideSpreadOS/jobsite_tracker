const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    property: {
        site_name: String,
        zoning: {
            type: String,
            required: true
        },
        address: {
            line_1: String,
            line_2: String,
            city: String,
            state: {
                type: String,
                default: 'CT'
            },
            zip: String,
            country: {
                type: String,
                default: 'US'
            },
        },
        contact: {
            phone: {

                mobile: String,
                home: String,
                office: String,
                other: String
            },
            fax: {
                personal: String,
                business: String
            },
            email: {
                personal: String,
                business: String,
                other: String
            }
        }
    },
    client: {
        address: {
            line_1: String,
            line_2: String,
            city: String,
            state: {
                type: String,
                default: 'CT'
            },
            zip: String,
            country: {
                type: String,
                default: 'US'
            },
        },
        contact: {
            phone: {

                mobile: String,
                home: String,
                office: String,
                other: String
            },
            fax: {
                personal: String,
                business: String
            },
            email: {
                personal: String,
                business: String,
                other: String
            }
        },
        phases: {
            approved: {
                status: {
                    type: Boolean,
                    default: false
                },
                on_date: {
                    type: Date,
                    default: Date.now()
                }
            },
            surveyed: {
                status: {
                    type: Boolean,
                    default: false
                },
                on_date: {
                    type: Date,
                    default: Date.now()
                }
            },
            started: {
                status: {
                    type: Boolean,
                    default: false
                },
                on_date: {
                    type: Date,
                    default: Date.now()
                }
            },
            completed: {
                status: {
                    type: Boolean,
                    default: false
                },
                on_date: {
                    type: Date,
                    default: Date.now()
                }
            }
        }
    },
    expenses: [
        {
            refers_to: {type: mongoose.Schema.Types.ObjectId, ref: 'Expense'},
            amount: Number
        }
    ],
    permits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Permit'}],
    notes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Note'}],



})

module.exports = mongoose.model("Job", JobSchema)
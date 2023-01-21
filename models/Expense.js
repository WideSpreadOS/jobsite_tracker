const mongoose = require("mongoose")

const ExpenseSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String, // material, rental, transportation, etc.
    units: String,
    price: Number,
    supplier: {
        company_name: String,
        url: String,
        contact: {
            phone: String,
            email: String,
            fax: String
        }
    }
})

module.exports = mongoose.model("Expense", ExpenseSchema)
const mongoose = require('mongoose')
const schema = mongoose.Schema

const rankSchema = new schema({
    name: { type: String },
    score: { type: Number }
})

const rankModel = mongoose.model('rank', rankSchema)
module.exports = rankModel
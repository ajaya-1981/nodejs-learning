const mongoose = require('mongoose');
// schema
const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    reDirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamp: { type: Number } }],
}, { timestamps: true })
// Model
const URL = mongoose.model('url', urlSchema);
module.exports = URL;

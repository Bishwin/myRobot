const mongoose = require('mongoose');

const hooverLogSchema = mongoose.Schema({
    input: {
        roomSize: [Number],
        coords: [Number],
        patches: [[Number]],
        instructions: "String"
    },
    output: {
        coords: [Number],
        patches: Number
    }
});

module.exports = mongoose.model('hooverLog', hooverLogSchema);
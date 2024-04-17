const mongoose = require('mongoose');
// Schema
const balanceSchema = new mongoose.Schema({
    AccountNumber: {
        type: String,
        required: true,
        imutable: true,
        Unique: true,
    },
    Balance: {
        type: Number,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
        imutable: true,
        imutable: true,
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    },
});

// Events handler

balanceSchema.pre('save', function(next) {
    this.UpdatedAt = Date.now();
    next();
});

balanceSchema.pre('update', function(next) {
    this.UpdatedAt = Date.now();
    next();
});


module.exports = mongoose.model('Balances', balanceSchema);


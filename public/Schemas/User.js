const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        immutable: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    }, 
    UpdatedAt: {
        type: Date,
        default: Date.now
    },
    age: {
        type: Number,
        required: true, 
    },
    address: {
        type: String,
        required: true,
        max: 255
    },
    _id: {
        type: String,
        required: true,
        default: () => nanoid(20),
        index: { unique: true },
        unique: true,
      },
});

// Events handler 

userSchema.pre('save', function(next) {
    this.UpdatedAt = Date.now();
    next();
});

userSchema.pre('update', function(next) {
    this.UpdatedAt = Date.now();
    next();
});

// Functions

userSchema.pre('findOneAndUpdate', function(next) {
    this.UpdatedAt = Date.now();
    next();
});





module.exports = mongoose.model('users', userSchema);
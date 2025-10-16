    const { Schema } = require("mongoose");

    const UserSchema = new Schema({
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true, // Each email must be unique
      },
      password: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });

    module.exports = { UserSchema };
    

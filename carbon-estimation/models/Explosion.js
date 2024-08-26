const mongoose = require('mongoose');

const explosionSchema = new mongoose.Schema({
  explosiveType: { type: String, required: true },
  amount: { type: Number, required: true },
  emissions: {
    CO: { type: String, required: true },
    NOx: { type: String, required: true },
    NH3: { type: String, required: true },
    HCN: { type: String, required: true },
    H2S: { type: String, required: true },
    SO2: { type: String, required: true },
    CO2: { type: String, required: true } // Added CO2 field
  }
});

module.exports = mongoose.model('Explosion', explosionSchema);

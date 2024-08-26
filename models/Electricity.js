const mongoose = require('mongoose');

const electricitySchema = new mongoose.Schema({
  stateName: { type: String, required: true },
  energyPerTime: { type: Number, required: true },
  responsibleArea: { type: Number, required: true },
  totalArea: { type: Number, required: true },
  result: {
    type: Map,
    of: new mongoose.Schema({
      value: Number,
      unit: String
    }, { _id: false })
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Electricity', electricitySchema);

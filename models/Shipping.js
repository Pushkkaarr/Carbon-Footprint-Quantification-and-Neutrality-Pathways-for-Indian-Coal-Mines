// models/Shipping.js
const mongoose = require('mongoose');

const ShippingSchema = new mongoose.Schema({
  weight_unit: { type: String, required: true },
  weight_value: { type: Number, required: true },
  distance_unit: { type: String, required: true },
  distance_value: { type: Number, required: true },
  transport_method: { type: String, required: true },
  result: { type: Object, required: true }  // To store the response from the API
});

module.exports = mongoose.model('Shipping', ShippingSchema);

// models/Sink.js
const mongoose = require('mongoose');

// Define the schema for the carbon sink
const sinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  vegetationType: {
    type: String,
    required: true,
    enum: ['forest', 'grassland', 'wetland', 'agricultural', 'mangrove', 'other'], // Example vegetation types
    default: 'forest',
  },
  areaCovered: {
    type: Number,
    required: true,
    min: 0, // Area cannot be negative
  },
  carbonSequestrationRate: {
    type: Number,
    required: true,
    min: 0, // CSR cannot be negative
  },
  dailySequestrationRate: {
    type: Number, // CSR per day (tons of CO2 per hectare per day)
  },
  location: {
    type: {
      type: String,
      enum: ['Point'], // GeoJSON point
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
    },
  },
  additionalDetails: {
    type: String,
    trim: true,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for geospatial queries if location is provided
sinkSchema.index({ location: '2dsphere' });

// Create the Sink model
const Sink = mongoose.model('Sink', sinkSchema);

module.exports = Sink;

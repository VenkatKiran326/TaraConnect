const mongoose = require('mongoose');

const InfluencerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  handle: { type: String },
  bio: { type: String },
  categories: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Influencer', InfluencerSchema);

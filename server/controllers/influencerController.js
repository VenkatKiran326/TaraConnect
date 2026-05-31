const Influencer = require('../models/Influencer');

exports.list = async (req, res) => {
  try {
    const items = await Influencer.find().populate('user', 'name');
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const data = { ...req.body, user: req.userId };
    const inf = await Influencer.create(data);
    res.status(201).json(inf);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.get = async (req, res) => {
  try {
    const inf = await Influencer.findById(req.params.id).populate('user', 'name');
    if (!inf) return res.status(404).json({ msg: 'Not found' });
    res.json(inf);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.update = async (req, res) => {
  try {
    const inf = await Influencer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(inf);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Influencer.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

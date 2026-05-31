const Brand = require('../models/Brand');

exports.list = async (req, res) => {
  try {
    const items = await Brand.find().populate('owner', 'name email');
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, website, description } = req.body;
    const brand = await Brand.create({ name, website, description, owner: req.userId });
    res.status(201).json(brand);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.get = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id).populate('owner', 'name email');
    if (!brand) return res.status(404).json({ msg: 'Not found' });
    res.json(brand);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.update = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(brand);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

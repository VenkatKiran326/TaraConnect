const mongoose = require('mongoose');
const User = require('./models/User');
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/taraconnect';
(async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const users = await User.find({}, { email: 1, name: 1, role: 1 }).limit(20).lean();
    console.log(JSON.stringify(users, null, 2));
    await mongoose.disconnect();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();

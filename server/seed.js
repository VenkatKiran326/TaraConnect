
/* eslint-env node */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User');
dotenv.config();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/taraconnect';

const users = [
  {
    name: 'Brand User',
    email: 'brand@example.com',
    password: 'Test@123456',
    role: 'brand',
  },
  {
    name: 'Influencer User',
    email: 'influencer@example.com',
    password: 'Test@123456',
    role: 'influencer',
  },
];

const seed = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB:', uri);

    for (const userData of users) {
      const existing = await User.findOne({ email: userData.email });
      if (existing) {
        console.log(`Skipping existing user: ${userData.email}`);
        continue;
      }

      const hash = await bcrypt.hash(userData.password, 10);
      const user = new User({
        name: userData.name,
        email: userData.email,
        password: hash,
        role: userData.role,
      });
      await user.save();
      console.log(`Created user: ${userData.email}`);
    }

    console.log('Seeding complete.');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }
};

seed();

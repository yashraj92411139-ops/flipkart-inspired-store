import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import { products } from '../src/data/mockData.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const jwtSecret = process.env.JWT_SECRET || 'shoply-dev-secret';

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

const connectToMongo = async () => {
  if (!process.env.MONGO_URI) {
    console.log('MongoDB not configured. Running in mock mode.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.warn('MongoDB connection failed, falling back to mock mode:', error.message);
  }
};

connectToMongo();

const generateToken = (payload) => jwt.sign(payload, jwtSecret, { expiresIn: '7d' });

app.get('/api/health', (req, res) => {
  res.status(200).json({
    ok: true,
    message: 'Shoply API is online',
    mode: process.env.MONGO_URI ? 'mongodb' : 'mock',
  });
});

app.get('/api/products', (req, res) => {
  res.status(200).json({ products });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((item) => item.id === req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json({ product });
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Please use a valid email address' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  const passwordHash = bcrypt.hashSync(password, 8);
  const user = {
    id: `user-${Date.now()}`,
    name,
    email,
    passwordHash,
  };

  return res.status(201).json({
    message: 'User created successfully',
    user: { id: user.id, name: user.name, email: user.email },
    token: generateToken({ id: user.id, email: user.email }),
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Email is invalid' });
  }

  if (email === 'admin@shoply.com' && password === 'admin123') {
    return res.status(200).json({
      message: 'Login successful',
      user: { name: 'Admin User', email, role: 'admin' },
      token: generateToken({ email, role: 'admin' }),
    });
  }

  return res.status(401).json({ message: 'Invalid email or password' });
});

app.post('/api/checkout', (req, res) => {
  const { cart, shippingAddress, paymentMethod } = req.body;

  if (!Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  if (!shippingAddress || !shippingAddress.name || !shippingAddress.city) {
    return res.status(400).json({ message: 'Shipping address is required' });
  }

  const subtotal = cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const order = {
    id: `ord-${Date.now()}`,
    status: 'Confirmed',
    total: subtotal + 99,
    itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    paymentMethod: paymentMethod || 'Test Gateway',
    shippingAddress,
  };

  return res.status(201).json({ message: 'Order created successfully', order });
});

app.get('/api/admin/summary', (req, res) => {
  const totalRevenue = products.reduce((sum, product) => sum + product.price, 0);

  return res.status(200).json({
    metrics: {
      products: products.length,
      revenue: `₹${(totalRevenue / 1000).toFixed(2)}k`,
      orders: 128,
      lowStock: products.filter((item) => item.stock < 10).length,
    },
  });
});

app.listen(port, () => {
  console.log(`Shoply server running on http://localhost:${port}`);
});

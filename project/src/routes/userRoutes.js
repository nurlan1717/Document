const express = require('express');
const router = express.Router();
const { hashPassword, comparePassword } = require('../utils/auth');
const db = require('../data/db');

// Get all users
router.get('/', (req, res) => {
  const usersWithoutPasswords = db.users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  res.json(usersWithoutPasswords);
});

// Get user by ID
router.get('/:id', (req, res) => {
  const user = db.users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// Create new user
router.post('/', async (req, res) => {
  const { fullName, username, email, password, profileImage, role, major, grades, overallGrade } = req.body;

  // Check if all required fields are provided
  if (!fullName || !username || !email || !password || !profileImage || !role || !major) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user exists
  if (db.users.some(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await hashPassword(password);

  // Create new user object
  const newUser = {
    id: `u${db.users.length + 1}`,
    fullName,
    username,
    email,
    password: hashedPassword,  // Store the hashed password
    profileImage,
    role,
    major,
    grades,
    overallGrade
  };

  // Push new user to the database
  db.users.push(newUser);

  // Remove password from the response before sending
  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json(userWithoutPassword);
});

// Update user
router.patch('/:id', async (req, res) => {
  const userIndex = db.users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  const updatedUser = { ...db.users[userIndex], ...req.body };

  if (req.body.password) {
    updatedUser.password = await hashPassword(req.body.password);  // Hash new password if provided
  }

  db.users[userIndex] = updatedUser;

  const { password, ...userWithoutPassword } = updatedUser;
  res.json(userWithoutPassword);
});

// Delete user
router.delete('/:id', (req, res) => {
  const userIndex = db.users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  db.users.splice(userIndex, 1);
  res.status(204).send();
});

module.exports = router;

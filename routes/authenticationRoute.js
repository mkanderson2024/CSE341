const express = require('express')
const router = express.Router();
const User = require('../models/user')
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const authenticationToken = require('../utility/authenticate')

// User Registration route
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    body('name').optional().isString()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;

    try {
        const exsisting = await User.findOne({ email })
        if (exsisting) {
            return res.status(409).json({ message: 'User already exsists' });

        }

        const user = new User({ email, password, name });
        await user.save();
        
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                roles: user.roles
            }
        })
    } catch (err) {
        console.error('Registration error:', err)
        res.status(500).json({ message: 'Server error' })
    }
}
)

// User Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check for user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // JWT payload
    const payload = {
      sub: user._id.toString(),
      roles: user.roles
    };

    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    });

    return res.status(200).json({
      message: 'Login successful',
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

router.get('/protected', authenticationToken, (req, res) => {
  res.json({
    message: 'You accessed a protected route',
    user: req.user
  })
})


module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route         POST api/users
// @description   Register a user
// @access        Public
router.post(
  '/',
  [
    check('name', 'Please enter a name')
      .not()
      .isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // we see if the user already exists according to email entered
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password
      });

      // salt is needed to encyrpt the password
      // salt is generated 10 times, which tells you how secure it is
      const salt = await bcrypt.genSalt(10);

      // we use the salt to hash the password
      user.password = await bcrypt.hash(password, salt);

      //save the hashed version of the password in database
      await user.save();

      //object to be sent in the JSON Web Token, which has user id
      //id is used to access all the profiles the user has
      const payload = {
        user: {
          id: user.id
        }
      };

      //to generate a JSON Web Token, we have to sign it
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

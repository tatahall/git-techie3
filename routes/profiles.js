const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Profile = require('../models/Profile');

// @route         GET api/profiles
// @description   Get all user profiles
// @access        Private
router.get('/', authenticate, async (req, res) => {
  try {
    // gets the user's profiles sort by most recent dates
    const profiles = await Profile.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route         POST api/profiles
// @description   Add new profile
// @access        Private
router.post(
  '/',
  [
    authenticate,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      username,
      numberofrepos,
      location,
      bio,
      languages,
      type
    } = req.body;

    try {
      // creating a new techie profile
      const newProfile = new Profile({
        name,
        email,
        username,
        numberofrepos,
        location,
        bio,
        languages,
        type,
        user: req.user.id
      });

      // saving the new techie profile to the database
      const profile = await newProfile.save();

      // returning the new techie profile to the client
      res.json(profile);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route         PUT api/profiles/:id
// @description   Update profile
// @access        Private
router.put('/:id', authenticate, async (req, res) => {
  const {
    name,
    email,
    username,
    numberofrepos,
    location,
    bio,
    languages,
    type
  } = req.body;

  // Build profile object
  const profileFields = {};
  if (name) profileFields.name = name;
  if (email) profileFields.email = email;
  if (username) profileFields.phone = username;
  if (numberofrepos) profileFields.name = numberofrepos;
  if (location) profileFields.name = location;
  if (bio) profileFields.name = bio;
  if (languages) profileFields.name = languages;
  if (type) profileFields.type = type;

  try {
    // find techie profile information by id
    let profile = await Profile.findById(req.params.id);

    if (!profile) return res.status(404).json({ msg: 'Profile not found' });

    // Makes sure user has the correct techie profile data
    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    //find profile data by id and update the profile field
    //if profile doesn't exist, create it
    profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $set: profileFields },
      { new: true }
    );

    // pass along updated profile data
    res.json(profile);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route         DELETE api/profiles/:id
// @description   Delete profile
// @access        Private
router.delete('/:id', authenticate, async (req, res) => {
  try {
    //find the profile by id
    let profile = await Profile.findById(req.params.id);

    if (!profile) return res.status(404).json({ msg: 'Profile not found' });

    // Make sure the profile is attributed to the user
    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    //find the profile by id and remove it
    await Profile.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Profile removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
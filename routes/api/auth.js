const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
//@route Get api/auth
//@desc  Test route
//@access public
router.get('/', auth, (req, res) => res.send('Auth route'));
module.exports = router;

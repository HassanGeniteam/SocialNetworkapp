const express = require('express');
const router = express.Router();
//@route Get api/Proile
//@desc  Test route
//@access public
router.get('/', (req, res) => res.send('Profile route'));
module.exports = router;

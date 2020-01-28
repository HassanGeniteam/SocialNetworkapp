const express = require('express');
const router = express.Router();
//@route Get api/User
//@desc  Test route
//@access public
router.get('/', (req, res) => res.send('User route'));
module.exports = router;
//ghr ja ker

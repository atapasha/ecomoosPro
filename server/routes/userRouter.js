const express = require('express');
const userlist = require('../controllers/user/userlist');
const router = express.Router();

// روت اصلی
router.get('/',userlist);

module.exports = router;

const express = require('express');
const userlist = require('../controllers/user/userlist');
const register = require('../controllers/user/register');
 const router = express.Router();

// روت اصلی
router.get('/',userlist);
router.post('/register',register)

module.exports = router;

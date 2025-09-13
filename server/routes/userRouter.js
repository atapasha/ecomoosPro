const express = require("express");
const userlist = require("../controllers/user/userlist");
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const usersingle = require("../controllers/user/usersingle");
const updateuser = require("../controllers/user/updateuser");
const authenticateToken=require('../middlewares/verifytoken');


const router = express.Router();

// روت اصلی
router.get("/", userlist);
router.get("/:id", usersingle);
router.post("/register", register);
router.post("/login", login);
router.patch('/:id',authenticateToken,updateuser); 
module.exports = router;

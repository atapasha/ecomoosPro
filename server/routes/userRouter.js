const express = require("express");
const userlist = require("../controllers/user/userlist");
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const usersingle = require("../controllers/user/usersingle");
const router = express.Router();

// روت اصلی
router.get("/", userlist);
router.get("/:id", usersingle);
router.post("/register", register);
router.post("/login", login);
module.exports = router;

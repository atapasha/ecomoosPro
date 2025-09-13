 
const express = require("express");
const userlist = require("../controllers/user/userlist");
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const usersingle = require("../controllers/user/usersingle");
const updateuser = require("../controllers/user/updateuser");
const authenticateToken = require("../middlewares/verifytoken");
const deleteuser = require("../controllers/user/deleteuser");
const frontenduser = require("../controllers/user/frontend/frontenduser");
const frontendupdateuser = require("../controllers/user/frontend/frontendupdateuser");

const router = express.Router();

// روت اصلی
router.get("/", userlist);

// اول روت‌های ثابت
router.get("/userinfo", authenticateToken, frontenduser);

// بعد روت‌های داینامیک
router.get("/:id", usersingle);

router.delete("/:id", deleteuser);
router.post("/register", register);
router.post("/login", login);

router.patch("/", authenticateToken, frontendupdateuser);
router.patch("/:id", authenticateToken, updateuser);

module.exports = router;

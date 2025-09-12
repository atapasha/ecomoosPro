const Usertable = require("../../Models/usertable");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "12345678910";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Usertable.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password not matched" });
    }

    const token = jwt.sign({ id: user._id }, secretKey, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      status: "successful",
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "failed", error: error.message });
  }
};

module.exports = login;

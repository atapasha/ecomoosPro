const Usertable = require("../../Models/usertable");


const jwt = require("jsonwebtoken");
bcrypt = require("bcrypt");
const secretKey = "12345678910";


const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const { first_name, last_name, dob, email, mobile, password } = req.body;
    const bcrypt_password = await bcrypt.hash(password, salt);

    const createuser = new Usertable({
      first_name: first_name,
      last_name: last_name,
      email: email,
      dob: dob,
      mobile: mobile,
      password: bcrypt_password,
    });

    const response = await createuser.save();

    console.log(req.body);

    res.send({ status: "Successfully", data: response });
  } catch (errors) {
    res.send({ status: "fail", errors });

    console.log("user register error is here", errors);
  }
};

module.exports = register;

const Usertable = require("../../Models/usertable");

const usersingle = async (req, res) => {
  try {
    const userId = req.params.id;
    const userdetail = await Usertable.findById(userId);
    if (!userdetail) {
      return res.status(404).send({ errors: "user detail not found" });
    } else {
      res.status(200).send({ status: "successfully", data: userdetail });
    }

    res.send("this is usersingle", req.params.id);
  } catch (errors) {
res.status(500).send({errors:"An error happen while fetching",servererror:errors})  }
};

module.exports = usersingle;

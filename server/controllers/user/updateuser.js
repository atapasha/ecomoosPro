const Usertable = require("../../Models/usertable");

const updateuser = async (req, res) => {
  try {
    const userId=req.params.id;
    const updatedUser = await Usertable.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ status: "failed", message: "user not found" });
    } else {
      res
        .status(200)
        .json({ status: "successfully updated", data: updatedUser });
    }
  } catch (err) {
    return res.status(500).json({ status: "faild", errors: err.message });
  }
};

module.exports = updateuser;

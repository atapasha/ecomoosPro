const Usertable = require("../../Models/usertable");

const deleteuser =async (req, res) => {
    const user =await Usertable.findByIdAndDelete(req.params.id);
   try {
 
    res.send({
      status: "successfully deleted",
      data: user,
    });
  } catch (err) {
    res.status(200).send({ error: "An error acuur while deletings user" });
  }
};

module.exports = deleteuser;

const Usertable = require("../../Models/usertable");

 
const userlist =async (req, res) => {

    try{

         const userdata =await Usertable.find();
         res.send({status:"successfully",data:userdata})
         console.log("user list data",userdata)

    }catch(error){
         res.send({status:"fail",data:userdata})

        console.log("ero",error.error)
    }

};

module.exports = userlist;

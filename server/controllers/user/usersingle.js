

const usersingle=(req,res)=>{

    try{
        res.send("this is usersingle",req);
    }catch(errors){
        res.send("this is  error",req);


    }


}

module.exports=usersingle

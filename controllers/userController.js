const db = require('../models');
const User = db.userModal;
exports.userRegister = async (req,res ) =>{
    
    try {
        console.log("user register controller", req.body);
        const {email, MobileNo} = req.body;
        let user = User.create({
            email:email,
            MobileNo:MobileNo
        })
        res.send("routing setup done");
        
    } catch (error) {
        
    }
}


const userSchema = require("../schema/usersSchema");
const useremail = require("../modules/email");
const usersRegister = async (req,res) => {
    try{
        const userRes = await userSchema(req.body).save();
        if(userRes) res.status(200).json(userRes);
        res.status(424).json({message:false});
    }
    catch(err)
    {
        res.status(422).json({message:'registration failed'});
    }
};

const usersLogin = async (req,res) => {
    const loginData = req.body;
    const userRes = await userSchema.find({email:req.body.email});
    if (userRes[0].password == req.body.password) res.status(200).json({message:true});
    res.status(424).json({message:false});
};

const usersForgotPassword = async (req,res)=>{
    const email = req.body.email;
    const suj = "This is your new password";
    const emaiContent = "12345";
    const sendemail = await useremail.emailSender(email, suj, emaiContent);
    // res.send(sendemail);
    // const email = req.body.email;
    // const suj = "This is your new password";
    // const emaiContent = "12345";
    // const sendemail = await useremail.emailSender(email, suj, emaiContent);
    // if(sendemail == 'sending success')
    // {
    //     res.status(200).json({message:true})
    // }
    // else{
    //     res.status(424).json({message:false});
    // }


};
module.exports = {
    usersRegister,
    usersLogin,
    usersForgotPassword
}
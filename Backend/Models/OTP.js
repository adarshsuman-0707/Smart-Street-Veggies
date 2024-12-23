const mongoose=require('mongoose');
const  mailSender=require("../utilities/mailSender");

const otpTemplate= require("../mail/verificationMail");
const resetPasswordTemplate=require('../mail/VerificationPasswordMail')
// const otpTemplate= require("../mail/verificationMail" );


const otpSchema=mongoose.Schema({

    email:{
        type:String,
        // required:true,
    },
    otp:{
        type:Number,
        // required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:60*5
    }
})

async function sendVerificationMail(email,otp){
    try{
        let response= mailSender(email,"Email verification Code",otpTemplate(otp));
        // consolne.log("mailsender",response);

    }catch(error){
        console.error(error);
        console.log("send verification error in the otp models");
    }
}
async function sendResetPasswordTemplate(email,otp){
    try{
        let response= mailSender(email,"Email verification Code",resetPasswordTemplate(otp));
        // consolne.log("mailsender",response);

    }catch(error){
        console.error(error);
        console.log("send verification error in the otp models");
    }
}

otpSchema.pre("save", async function(next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationMail(this.email, this.otp);
	}
	next();
});
// <<<<<<< HEAD

// =======
// const otp =mongoose.model("OTP",otpSchema);
// module.exports=otp;
// >>>>>>> 82e8f0305bc9bc9392c88f20568e457086590d05
const OTP =mongoose.model("OTP",otpSchema);
module.exports = {
    OTP,
    sendVerificationMail,sendResetPasswordTemplate
};

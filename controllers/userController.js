const UserUseCases = require("../usecases/userUseCases");
const response = require("../helpers/apiResponse");
const msgs = require("../helpers/messages")
class UserController {
  async signup(req, res) {
    try {
      // const { email, phoneNo, screenNo } = req.body;
      await UserUseCases.registerUser(req.body);
      return response.okResponse(res, "otp generated");
    } catch (error) {
      return response.internalServerErrorResponse(
        res,
        error.message,
        "Error in SignUp Api"
      );
    }
  }
  async otpVerify(req, res) {
    try {
      const { email, phoneNo, otp } = req.body;
      const token = await UserUseCases.verifyOtp(email, phoneNo, otp);
      return response.okResponse(res, "Otp Verified", token);
    } catch (error) {
      return response.internalServerErrorResponse(
        res,
        error.message,
        "Error in OtpVerify Api"
      );
    }
  }
  async login(req, res) {
    try {
      const { email, phoneNo } = req.body;
      await UserUseCases.login(email, phoneNo);
      return response.okResponse(res, "Otp sent successfully");
    } catch (error) {
      return response.internalServerErrorResponse(
        res,
        error.message,
        "Error in Login Api"
      );
    }
  }

  async updateUser(req, res) {
    try {
      // const {email,phoneNo,longitude,latitude,firstname,lastname,birthdate,address,gender,showGender,perfectMatch,showPerfectMatch,ageRange,bio,education,university,pushNotifications,interests,fbUrl,instaUrl,snapchatUrl,spotifyUrl,appleMusicUrl,tiktokUrl,screenNo} = req.body;
      
      await UserUseCases.updateUser(req.body, req.user.id);
      return response.okResponse(res, "User Updated Successfully");
    } catch (error) {
      return response.internalServerErrorResponse(
        res,
        error.message,
        "Error in Update User Api"
      );
    }
  }

  async userAnswer(req, res){
    try {
      await UserUseCases.userAnswer(req.body, req.user.id);
      return response.okResponse(res, msgs.okResponses.CREATED_SUCCESSFULLY);
    } catch (error) {
      return response.internalServerErrorResponse(res, error.message, msgs.internalServerErrorResponses.INTERNAL_SERVER_ERROR);
    }
  }
}

module.exports = new UserController();
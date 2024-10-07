const users = require("../models/users");
const UserRepository = require("../repositories/userRepository");
const { generateOtp, createToken } = require("../utils/utility");

class UserUseCases {
  async registerUser(userData) {
    if (!userData.email && !userData.phoneNo) {
      throw new Error("Please provide email or password");
    }
    const existingUser = await UserRepository.findUser(
      userData.email,
      userData.phoneNo
    );
    if (existingUser) {
      throw new Error("User already existed");
    }

    await UserRepository.createUser(userData);

    const otp = generateOtp();
    return await UserRepository.updateOtp(userData, otp);
  }

  async verifyOtp(email, phoneNo, otp) {
    const user = await UserRepository.verifyOtp(email, phoneNo, otp);

    if (!user) {
      throw new Error("Invalid Otp");
    }

    const token = createToken(user);
    return token;
  }

  async login(email, phoneNo) {
    if (!email && !phoneNo) {
      throw new Error("Please provide email or password");
    }
    const user = await UserRepository.findUser(email, phoneNo);
    if (!user) {
      throw new Error("User does not Exists, Please SignUp First");
    }
    
    let userData = {
      email: email,
      phoneNo: phoneNo,
    };

    const otp = generateOtp();
    return await UserRepository.updateOtp(userData, otp);
  }

  async updateUser(userData, userId) {
    const user = await UserRepository.findUserById(userId);
    if (!user) {
      throw new Error("No user found");
    }
    return await UserRepository.updateUser(userData, userId);
  }

  async userAnswer(userData, userId){
    const {screenNo, options, questionId}= req.body    
    const user = await UserRepository.updateUser(screenNo, userId);
    if (!user) {
      throw new Error("No user found");
    }
    await UserRepository.storeUserAnswer(userId,questionId,options);
  }
}

module.exports = new UserUseCases();

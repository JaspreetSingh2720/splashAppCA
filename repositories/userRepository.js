const USER = require("../models/users");
const UserAnswer = require("../models/userAnswer");
class UserRepository {
  async findUser(email, phoneNo) {
    if (email) {
      return await USER.findOne({ email });
    } else if (phoneNo) {
      return await USER.findOne({ phoneNo });
    }
  }

  async createUser(user) {
    return await USER.create(user);
  }

  async updateOtp(userData, otp) {
    return await USER.findOneAndUpdate(
      { $or: [{ email: userData.email }, { phoneNo: userData.phoneNo }] },
      { $set: { otp: otp } }
    );
  }

  async verifyOtp(email, phoneNo, otp) {
    return await USER.findOne({
      $or: [{ email: email }, { phoneNo: phoneNo }],
      otp: otp,
    });
  }

  async findUserById(userId) {
    return await USER.findById({ _id: userId });
  }

  async updateUser(userData, userId) {
    return await USER.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          email: userData.email,
          phoneNo: userData.phoneNo,
          location: {
            type: "Point",
            coordinates: [userData.longitude, userData.latitude],
          },
          firstname: userData.firstname,
          lastname: userData.lastname,
          birthdate: userData.birthdate,
          address: userData.address,
          gender: userData.gender,
          showGender: userData.showGender,
          perfectMatch: userData.perfectMatch,
          showPerfectMatch: userData.showPerfectMatch,
          ageRange: userData.ageRange,
          bio: userData.bio,
          education: userData.education,
          university: userData.university,
          pushNotifications: userData.pushNotifications,
          interests: userData.interests,
          fbUrl: userData.fbUrl,
          instaUrl: userData.instaUrl,
          snapchatUrl: userData.snapchatUrl,
          spotifyUrl: userData.spotifyUrl,
          appleMusicUrl: userData.appleMusicUrl,
          tiktokUrl: userData.tiktokUrl,
          screenNo: userData.screenNo,
        },
      },
      { new: true }
    );
  }

  async storeUserAnswer(userId, questionId, options){
    return await UserAnswer.create({userId : userId, questionId : questionId, options: options})
  }
}

module.exports = new UserRepository();

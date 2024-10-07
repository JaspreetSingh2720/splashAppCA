const USER = require("../models/users");

class UserRepository {
  async findUserById(userId) {
    return await USER.findById({ _id: userId });
  }

  async uploadDocument(userData, userFiles, userId) {
    return await USER.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          document: {
            documentType: userData.documentType,
            frontSide: userFiles[0].filename,
            backSide: userFiles[1].filename,
          },
          screenNo: userData.screenNo,
        },
      },
      { new: true }
    );
  }

  async uploadPhotos(screenNo, photos, userId) {
    return await USER.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          photos: photos,
          screenNo: screenNo,
        },
      },
      { new: true }
    );
  }
}

module.exports = new UserRepository();

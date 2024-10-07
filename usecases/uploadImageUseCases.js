const UploadImageRepository = require("../repositories/uploadImageRepository");

class UploadImageUseCases {
  async uploadDocument(userData, userFiles, userId) {
    const user = await UploadImageRepository.findUserById(userId);
    if (!user) {
      throw new Error("No user found");
    }
    return await UploadImageRepository.uploadDocument(
      userData,
      userFiles,
      userId
    );
  }

  async uploadPhotos(screenNo, userFiles, userId) {
    const user = await UploadImageRepository.findUserById(userId);
    if (!user) {
      throw new Error("No user found");
    }

    if (userFiles.length > 9) {
      throw new Error("Please Provide Upto 9 Images");
    }

    const photos = userFiles ? userFiles.map((file) => file.filename) : [];

    return await UploadImageRepository.uploadPhotos(screenNo, photos, userId);
  }
}

module.exports = new UploadImageUseCases();

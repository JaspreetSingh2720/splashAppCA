const response = require("../helpers/apiResponse");
const UploadImageUseCases = require("../usecases/uploadImageUseCases");
class UploadImageController {
  async uploadDocument(req, res) {
    try {
      // const {documentType, screenNo} = req.body;
      await UploadImageUseCases.uploadDocument(
        req.body,
        req.files,
        req.user.id
      );
      return response.okResponse(res, "Documents Uploaded");
    } catch (error) {
      return response.internalServerErrorResponse(
        res,
        error.message,
        "Error in uploadDocuments Api"
      );
    }
  }

  async uploadPhotos(req, res) {
    try {
      const { screenNo } = req.body;
      await UploadImageUseCases.uploadPhotos(screenNo, req.files, req.user.id);
      return response.okResponse(res, "Images uploaded successfully");
    } catch (error) {
      return response.internalServerErrorResponse(
        res,
        error.message,
        "Error in uploadPhotos Api"
      );
    }
  }
}

module.exports = new UploadImageController();

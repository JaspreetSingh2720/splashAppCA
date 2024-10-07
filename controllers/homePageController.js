const HomePageUseCases = require("../usecases/homePageUseCases");
const response = require("../helpers/apiResponse");
const msgs = require("../helpers/messages");
class HomePageController {
  async getHomePageData(req, res) {
    try {
      const nearUsers = await HomePageUseCases.getHomePage(req.user.id);
      return response.okResponseWithData(
        res,
        msgs.okResponses.NEARBY_USERS_FOUND,
        nearUsers
      );
    } catch (error) {
      return response.internalServerErrorResponse(
        res,
        error.message,
        msgs.internalServerErrorResponses.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = new HomePageController();

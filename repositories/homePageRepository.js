const USER = require("../models/users");
class HomePageRepository {
  async findNearByUsers(userLocationCoordinates) {
    return await USER.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: userLocationCoordinates },
          distanceField: "dist.calculated",
          maxDistance: 10000,
          spherical: true,
        },
      },
      {
        $project: {
          firstname: 1,
          birthdate: 1,
          photos: 1,
          "dist.calculated": 1,
        },
      },
    ]);
  }
}

module.exports = new HomePageRepository();

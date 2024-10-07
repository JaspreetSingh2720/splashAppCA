const HomePageRepository = require("../repositories/homePageRepository");
const UserRepository = require("../repositories/userRepository");
class HomePageUseCases{
    async getHomePage(userId){
        const user = await UserRepository.findUserById(userId);
        if(!user){
            throw new Error("No User Found");
        }
        return await HomePageRepository.findNearByUsers(user.location.coordinates);
         
    }
}

module.exports = new HomePageUseCases();

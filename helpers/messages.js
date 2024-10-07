// module.exports = {
//     NOT_FOUND : "No User Found",
//     INTERNAL_SERVER_ERROR : "Error in the Api"
// }

const okResponses = {
    CREATED_SUCCESSFULLY: "Records Created Successfully",
    NEARBY_USERS_FOUND : "Nearby Users Found Successfully"
}

const internalServerErrorResponses = {
    INTERNAL_SERVER_ERROR : "Error In The Api"
}

const errorResponses = {
    NOT_FOUND : "No User Found",
}
module.exports = {
    okResponses,
    internalServerErrorResponses,
    errorResponses
}
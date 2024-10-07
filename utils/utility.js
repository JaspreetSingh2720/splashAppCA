const jwt = require("jsonwebtoken");

function generateOtp() {
  return "1234";
}

function createToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, {expiresIn : "7d"});
}

module.exports= {generateOtp, createToken}
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const uploadImagesRoutes = require("./routes/uploadImageRoutes");
const homePageRoutes = require("./routes/homePageRoutes");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/users", userRoutes);
app.use("/api/images", uploadImagesRoutes)
app.use("/api/", homePageRoutes)

module.exports = app;

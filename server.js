const {connectToMongoDb} = require("./config/connection");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT||8000; 

// DbConnection
connectToMongoDb(process.env.MONGO_URL)
.then(()=>console.log("MongoDb connected"))
.catch((err)=> console.log(`connection failed err : ${err}`));

//Server
app.listen(PORT, ()=> console.log(`server started at PORT: ${PORT}`));
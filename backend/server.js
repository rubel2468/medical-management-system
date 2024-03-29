import app from "./app.js";
import cloudinary from "cloudinary";
const path = require("path");
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  res.sendFile(path.resolve(__dirname, "dashboard", "build", "index.html"));
});

cloudinary.v2.config({
  cloud_name:"dvozhxu6n",
  api_key:"442261259376517" ,
  api_secret:"Qav6pUTxDhE6IY0Us9DoaY6jBzc" ,
});

app.listen(4000, () => {
console.log("server is running" )
});

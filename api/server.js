const dbUrl =
  "mongodb+srv://af_final:af123@af-ewh56.mongodb.net/gaming?retryWrites=true&w=majority";

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

//utils
app.use(bodyParser.json());
app.use(cors());

//DB Connection
mongoose
  .connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo database connected"))
  .catch((err) => console.log(err));

//Routes
var UserRoute = require("./routes/UserRoute");

app.use("/api/user", UserRoute);

app.listen(3500, () => {
  console.log("Server is listening on port 3500");
});

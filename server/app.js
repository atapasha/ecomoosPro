const userRouter = require("./routes/userRouter");
const express = require("express");
const app = express();
const port = 8000;

const database="mongodb://localhost:27017/MernStackProject";

const bodyParser = require("body-parser");
const cors = require("cors");
const connectdb = require("./db/connection");
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());

require('./Models/usertable');
connectdb(database);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

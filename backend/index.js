const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const userRouter = require("./Routers/userRouter");
const wasteRouter = require("./Routers/wasteRouter");
const statisticsRouter = require("./Routers/statisticsRouter");

mongoose.connect("mongodb://localhost:27017/wastemanagementapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, console.log(`server is listening to port ${PORT}`));

app.use(express.json({ limit: "3mb" })); // bodyparser
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/waste", wasteRouter);
app.use("/api/statistics", statisticsRouter);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

// mongoose.connect(process.env.DATABASE_ACCESS, () => {
//   console.log("Database connected");
// });

app.use(express.json());
app.use(cors());
app.use("/app", routeUrls);

mongoose
  .connect(
    process.env.DATABASE_ACCESS
    //    {
    //   useNewUrlParser: true,
    //   useCreatedIndex: true,
    //   useFindAndModify: false,
    // }
  )
  .then((con) => {
    //console.log(con.connections);
    console.log("DB connected!");
  })
  .catch((err) => console.log(err));

const PORT = 4230;
app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));

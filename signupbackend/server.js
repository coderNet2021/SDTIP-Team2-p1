const mongoose = require('mongoose');
const dotenv = require('dotenv');



dotenv.config({ path: './config.env' });

const app = require('./app');

// mongoose.connect(process.env.DATABASE_ACCESS, () => {
//   console.log("Database connected");
// });

console.log('in server.js')

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
  .catch((err) => console.log('here error',err));

const PORT = 4230;
app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));


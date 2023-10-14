import mongoose from "mongoose";

const URI =
  "mongodb+srv://limapablomdz:repili123@coder.bykusle.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then((db) => console.log("DB is conected"))
  .catch((err) => console.log(err));

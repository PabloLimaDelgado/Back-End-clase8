import mongoose from "mongoose";

const URI =
  "mongodb+srv://limapablomdz:repili123@micluster.umelpup.mongodb.net/micluster?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then(() => console.log("Conectando a la base de datos"))
  .catch((error) => console.log(error));

import mongoose from "mongoose";
import app from "./app";

const port: number  = 5000;
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log('Data base connect ');
    
    app.listen(port, () => {
      console.log("server is running on port 500000000");
    });
  } catch (error) {
    console.log(error);
    
  }
}


main();
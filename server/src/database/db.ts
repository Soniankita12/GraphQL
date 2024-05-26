import mongoose from "mongoose";
export const coonectDb = (url: String) =>
  mongoose.connect(url, { dbName: "gql" }).then((c) => {
    console.log(`connected with ${c.connection.name}`);
  }).catch((e)=> console.log(e));

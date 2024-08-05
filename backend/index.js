/*
CORS
  - Stands for cross origin resource sharing
  - Allows different servers to communicate with each other without the need for a common domain name
*/

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import bookRouter from "./routes/bookRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB();
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling cors policy
//  - Option 1: Allow all origins with default of cors(*)
app.use(cors());
//  - Option 2: Allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.use("/", bookRouter);

app.listen(PORT, () => {
  console.log(
    `Server listening on port: ${`http://localhost:${PORT}`.cyan.underline}`
  );
});

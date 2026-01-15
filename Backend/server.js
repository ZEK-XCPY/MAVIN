require("dotenv").config(); 

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

// routes
const authRoutes = require("./routes/authRoutes");


connectDB();

// app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);


// app.use("/api/v1/openai", require("./routes/openaiRoutes"));

// error middleware 
app.use(errorHandler);

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`
      .bgCyan.white
  );
});

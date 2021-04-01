const express = require("express");
const path = require("path");
const app = express();

// static assets
app.use(express.static(path.join(__dirname, "static")));

// routers
const userRouter = require("./controllers/index");

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router middlewares
app.use("/user", userRouter);

// root routes
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// port
const PORT = process.env.PORT || 3535;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));

const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());
app.use(logger);
app.use("/students", studentRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

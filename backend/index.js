const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/projects", require("./routes/projects"));

// CV download
app.get("/api/cv", (req, res) => {
  res.download("./public/cv.pdf", "Rezwan_Utsop_CV.pdf");
});

app.listen(5000, () => {
  console.log("Backend running → http://localhost:5000");
});

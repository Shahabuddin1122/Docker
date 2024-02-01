const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "This my first docker file",
    },
    {
      id: 2,
      title: "This my second docker file",
    },
    {
      id: 3,
      title: "This my third docker file",
    },
  ]);
});
app.listen(4000, () => {
  console.log("server is running at 4000");
});

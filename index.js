const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;

const devices = {
  giga: {
    title: "Keenetic Giga",
    model: "KN-1011",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

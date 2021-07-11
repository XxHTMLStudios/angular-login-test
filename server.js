const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
// Serve static files
app.use(express.static(__dirname + "/dist/login-angular"));

// urlencode
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api to ensure that the use has correct pass
app.post("/api/login", (req, res) => {
  const correctPass = process.env.LOGIN_PASS;
  const inputPass = req.body.pass;
  console.log("***", correctPass);
  if (correctPass === inputPass) {
    res.status(200).json({
      isValid: true,
    });
  } else {
    res.status(200).json({
      isValid: false,
    });
  }
});

app.get(/.*/, function (req, res) {
  console.log("*****************" + process.env.LOGIN_PASS);
  res.sendFile(path.join(__dirname + "/dist/login-angular/index.html"));
});

// default Heroku port
app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Node Express server listening on http://localhost:${
      process.env.PORT || 5000
    }`
  );
});

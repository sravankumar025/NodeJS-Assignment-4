const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

app.set("view engine", "ejs");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// your code goes here

app.get("/", (req, res) => {
  res.send("<center><h1>Hello World</h1></center>");
});


//ADD

app.post("/add", (req, res) => {
  if (isNaN(req.body.num1) && isNaN(req.body.num2)) {
    res.json({
      status: "Error",
      message: "Must input both numbers"
    });
  }
  if (isNaN(req.body.num1) || isNaN(req.body.num2)){
    res.json({
      status: "Error",
      message: "Invalid data types"
    })
  }
  let sum = parseFloat(req.body.num1) + parseFloat(req.body.num2);
  if (sum > 1000000) {
    res.json({
      status: "Failure",
      message: "Overflow",
    });
  } else if (sum < -1000000) {
    res.json({
      status: "Failure",
      message: "Underflow",
    });
  } else {
    res.json({
      status: "success",
      message: "The sum of given two numbers",
      sum: sum,
    });
  }
});
app.get("/add", (req, res) => {
  res.sendFile(__dirname + "/add.html");
});

//SUB
app.post("/sub", (req, res) => {
  if (isNaN(req.body.num1) && isNaN(req.body.num2)) {
    res.json({
      status: "Error",
      message: "Must input both numbers"
    });
  }
  if (isNaN(req.body.num1) || isNaN(req.body.num2)){
    res.json({
      status: "Error",
      message: "Invalid data types"
    })
  }
  let diff = parseFloat(req.body.num1) - parseFloat(req.body.num2);
  if (diff > 1000000) {
    res.json({
      status: "Failure",
      message: "Overflow",
    });
  } else if (diff < -1000000) {
    res.json({
      status: "Failure",
      message: "Underflow",
    });
  } else {
    res.json({
      status: "success",
      message: "The difference of given two numbers",
      result: diff,
    });
  }
});
app.get("/sub", (req, res) => {
  res.sendFile(__dirname + "/sub.html");
});

//MUL

app.post("/mul", (req, res) => {
  if (isNaN(req.body.num1) && isNaN(req.body.num2)) {
    res.json({
      status: "Error",
      message: "Must input both numbers"
    });
  }
  if (isNaN(req.body.num1) || isNaN(req.body.num2)){
    res.json({
      status: "Error",
      message: "Invalid data types"
    })
  }
  let ans = parseFloat(req.body.num1) * parseFloat(req.body.num2);
  if (ans > 1000000) {
    res.json({
      status: "Failure",
      message: "Overflow",
    });
  } else if (ans < -1000000) {
    res.json({
      status: "Failure",
      message: "Underflow",
    });
  } else {
    res.json({
      status: "success",
      message: "The product of given two numbers",
      result: ans,
    });
  }
});
app.get("/mul", (req, res) => {
  res.sendFile(__dirname + "/mult.html");
});

//DIV

app.post("/div", (req, res) => {
  if (isNaN(req.body.num1) && isNaN(req.body.num2)) {
    res.json({
      status: "Error",
      message: "Must input both numbers"
    });
  }
  if (isNaN(req.body.num1) || isNaN(req.body.num2)){
    res.json({
      status: "Error",
      message: "Invalid data types"
    })
  }
  if (parseInt(req.body.num2) == 0)
    res.json({
      status: "Error",
      message: "Cannot divide by zero",
    });
  let div = parseFloat(req.body.num1) / parseFloat(req.body.num2);
  if (div > 1000000) {
    res.json({
      status: "Failure",
      message: "Overflow",
    });
  } else if (div < -1000000) {
    res.json({
      status: "Failure",
      message: "Underflow",
    });
  } else {
    res.json({
      status: "success",
      message: "The division of given two numbers",
      result: div,
    });
  }
});
app.get("/div", (req, res) => {
  res.sendFile(__dirname + "/div.html");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

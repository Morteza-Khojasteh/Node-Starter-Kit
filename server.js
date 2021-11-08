const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) =>{
    res.send(" Hello World! ")
});

app.get("/node", (req, res) =>{
    res.send("We start Node session!")
});

app.get("/codeyourfuture", (req, res) => {
    res.send("Code Your Future")
});

app.get("/chocolate", (req, res) => {
    let chocolate = req.query.amount;
    res.send("Hello World! You searched for " + chocolate )
});

app.get("/multiply", (req, res) => {
    let value1 = req.query.value1;
    let value2 = req.query.value2;
    let multiply = value1 * value2;
    res.send(`Your result is ${multiply}`)
});


app.listen(PORT, () => {
  console.log(`The server is listening at PORT ${PORT}`);
});

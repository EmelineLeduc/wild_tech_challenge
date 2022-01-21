const express = require("express");
const app = express();
const connection = require("../db-config");
const cors = require("cors");
const serverPort = process.env.PORT || 4000;

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

app.use(cors("http://localhost:4000"));
app.use(express.json());

app.post("/api/argonaut", (req, res) => {
  const { name } = req.body;
  connection.query(
    "INSERT INTO argonaut(name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        res.status(500).send("Error saving the argonaut");
      } else {
        res.status(200).send("Argonaut successfully saved");
      }
    }
  );
});

app.get("/api/argonaut", (req, res) => {
  connection
    .promise()
    .query("SELECT * FROM argonaut")
    .then(([results]) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving argonaut from database.");
    });
});

app.listen(serverPort, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${serverPort}`);
  }
});

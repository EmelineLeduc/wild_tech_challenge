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

app.listen(serverPort, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${serverPort}`);
  }
});

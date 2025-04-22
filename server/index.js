const express = require("express");
const mailer = require("./mailer");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

app.post("/formdata", async (req, res) => {
  var data = "";
  await req.on("data", (chunk) => {
    data = chunk.toString();
  });

  mailer.sendMail(data, (error, response) => {
    if (error) {
      console.log("Unable to send Mail", error);
      res.send({ error: error });
    } else {
      console.log(response);
      res.send(JSON.stringify({ response: response }));
    }
  });
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});

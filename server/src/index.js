const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const { development } = require("./config/config");
const port = development.PORT;

const mongooseConfig = require("./config/configMongoose");

app.use(cors());
mongooseConfig(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

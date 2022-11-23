const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const { development } = require("./config/config");
const port = development.PORT;

const mongooseConfig = require("./config/configMongoose");
const routes = require('./routes/routes');

app.use(cors());
app.use(routes);
mongooseConfig(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

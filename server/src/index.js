const express = require("express");
const cors = require("cors");
const app = express();

const { development } = require("./config/config");
const {auth} = require('./middleware/authMidd');
const port = development.PORT;

const mongooseConfig = require("./config/configMongoose");
const routes = require('./routes/routes');

app.use(express.json());
app.use(auth);
app.use(cors());
app.use(routes);
mongooseConfig(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("port", process.env.PORT || 4000);

app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});

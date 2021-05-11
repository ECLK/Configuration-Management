const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000/"
};

const db = require("./app/models");

db.sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  });

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({message:"Hello express"})
})



const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("Vovoshop server running on 3001")
})



const express = require("express");
const cors = require("cors");
const redis = require('redis');
const db = require("./app/models");
const bodyParser = require("body-parser");
const election = require('./app/routes/election');
const pollingstation = require('./app/routes/pollingstation');
const seat = require('./app/routes/seats');
const countingcenter = require('./app/routes/countingcenter');
const party = require('./app/routes/party');
const dummy = require('./app/routes/dummy');
const candidateconfig = require('./app/routes/candidateconfig');
const electiontemplate = require('./app/routes/electiontemplate');
const auth = require('./app/routes/auth.router');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000/"
};

db.sequelize.sync({ force: true})
  .then(() => {
    console.log(`Database & tables created!`);
  });

//console.log('Current Iteration is '+global.currentIteration);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', auth);
app.use('/election', election);
app.use('/pollingstation', pollingstation);
app.use('/seat', seat);
app.use('/postalcc', countingcenter);
app.use('/party', party);
app.use('/dummy', dummy);
app.use('/candidateconfig', candidateconfig);
app.use('/electiontemplate',electiontemplate)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Confimodule server running on 3001")
})



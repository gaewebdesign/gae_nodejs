const express = require('express');

const mongoose = require('mongoose')


const sctcRoute = require("./routes/routes.js")

const app = express();

app.use(express.static("./public"))
app.use( express.json({ limit: '5mb'} ))

app.use("/api/sctc", sctcRoute)


/*
app.get('/', (req, res) => {
  res.send('Hello from App Engine! Wed 12:46am');
});
*/


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening in on port ${PORT}...`);


});

const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require ('./database/db');
const cors = require('cors');
const surveyroutes = require ('./Routes/surveyroutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) =>{
  res.send("Hello Harshad API")
})


app.use("/surveyapi", surveyroutes)


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


module.export = app;
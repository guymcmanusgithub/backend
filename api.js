const express = require('express');
const app = express();

// const passport = require('passport');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

// const cors = require('cors');
require('dotenv').config()

// app.use(cors())
app.use(express.json());
// app.use(passport.initialize());
 
const url = process.env.DB_URL
mongoose.connect(url, { useNewUrlParser: true }) 
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});
mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});

app.use(require('./controllers'))
app.get('/', (req, res) => {
  res.send("API is working")
})


app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

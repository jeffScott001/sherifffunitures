const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, {  useNewUrlParser: 
    true, useUnifiedTopology: true  })
    .then(() => console.log('MangoDB Connected....'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/category', require('./routes/api/category'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));   
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
})
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 
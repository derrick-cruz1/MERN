const express = require('express');
const app = express();
const cors = require('cors');
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//setup mongodb 
require('./config/mongoose.config');

//setup routes 
require('./routes/authors.routes')(app);

app.listen(port, () => console.log("Listening on port: " + port));

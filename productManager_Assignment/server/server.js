const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//setup mongodb 
require('./config/mongoose.config');

//setup routes 
require('./routes/product.routes')(app);

app.listen(port, () => console.log("Listening on port: " + port));

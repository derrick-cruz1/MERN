const { response } = require("express");
const express = require("express");

var faker = require('faker');

var randomName = faker.name.findName();
var randomCompany = faker.company.companyName();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.get("/api/users/new", (request, response) => {
    console.log(request.url);
    console.log(request.body);

response.json([
    { 
        newUser: randomName
    }
])
});

app.get("/api/companies/new", (request, response) => {
    console.log(request.url);
    console.log(request.body);

response.json([
    { 
        companyName: randomCompany
    }
])
});

app.get("/api/user/companies/", (request, response) => {
    console.log(request.url);
    console.log(request.body);

response.json([
    { 
        companyName: randomCompany,
        newUser: randomName
    }
])
});


app.listen(8000, () => {
    console.log("You have successfully connected on port 8000!");
});

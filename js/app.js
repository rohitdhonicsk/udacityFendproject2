
/* Empty JS object to act as endpoint for all routes */
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
app.get('/api', function (req, res) {
  res.send(projectData);
})
/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('../'));
app.get('/',callBac2)
function callBac2(req,res){
  res.send('../');
}

const port = 8080;
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`runnnnsning on localhost: ${port}`);
};
// TODO-Spin up the server

app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}

// POST an animal
const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};



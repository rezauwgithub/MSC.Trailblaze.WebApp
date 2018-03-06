// server.js

const app = require('express')();
const editJsonFile = require('edit-json-file');
const settings = require('./__backend_settings__');
const util = require('./util');
const logger = require('morgan');
const apicache = require('apicache');


const cache = apicache.middleware;

/*
  if the file doesn't exist, the content will be an empty object by default.
*/
const projectsjsonfile = editJsonFile(`${__dirname}/jsonDBs/projects.json`, {
  autosave: true
});




app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  next();
});

app.use(logger('dev'));


// add route to display cache index
app.get('/api/cache/index', (req, res) => {
  console.log('apicache.getIndex(): ' + JSON.stringify(apicache.getIndex()));
  res.json(apicache.getIndex())
});

// add route to manually clear target/group
app.get('/api/cache/clear/:target?', (req, res) => {
  console.log('apicache.getIndex()');
  res.json(apicache.clear(req.params.target))
});


/* 
  The initial call to this will take 2 seconds, but any subsequent calls 
  will receive a response instantly from cache for the next hour
*/
app.get('/api/ping', cache('2 minutes'), (req, res) => {
  setTimeout(() => {
    res.end('pong');
  }, 1000);
});



app.get('/api/compilers/names', cache('2 minutes'), (req, res) => {

  setTimeout(() => {
    res.json([
      {
        value: 0,
        name: 'COMPILERTest426723'
      },
      {
        value: 1,
        name: 'COMPILERTest4223'
      },
      {
        value: 2,
        name: 'COMPILERTest424323'
      },
      {
        value: 3,
        name: 'COMPILERTest4243523'
      }
    ])
  }, 5000);

  /*
  util.getLicensedCompilers((licensedCompilers) => {
    res.json(licensedCompilers);
  });
  */

});



// Temp hard coded JSON data
var fakeproject = {
  "8725": {
    "value": 8725,
    "name": "Project-1443-RezaNaeemi_1-29-2018",
    "creationDate": Date()
  }
}
// End of Temp hard coded JSON data

app.get('/api/projects', (req, res) => {
  res.send(projectsjsonfile.get())
});


app.put('/api/createNewProject', (req, res) => {
  projectsjsonfile.set(fakeproject);
  res.send(projectsjsonfile.get());
});



const server = app.listen(settings.LISTEN_ON_PORT_NUMBER, () => {
  console.log(`MSC Express RESTful API backend listening at http://localhost:${settings.LISTEN_ON_PORT_NUMBER}`);
});
// server.js

const app = require('express')();
const getExpeditiousCache = require('express-expeditious');

const editJsonFile = require('edit-json-file');
const settings = require('./__backend_settings__');
const util = require('./util');

const compilers = require('./routes/compilers');


/*
  if the file doesn't exist, the content will be an empty object by default.
*/
const projectsjsonfile = editJsonFile(`${__dirname}/jsonDBs/projects.json`, {
  autosave: true
});


const cache = getExpeditiousCache({
  // Namespace used to prevent cache conflicts, must be alphanumeric
  namespace: 'expresscache',

  // Store cache entries for 1 minute (can also pass milliseconds e.g., 60000)
  defaultTtl: '1 minute',
});


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  next();
});


app.use('/compilers', compilers);


/* 
  The initial call to this will take 2 seconds, but any subsequent calls 
  will receive a response instantly from cache for the next hour
*/
app.get('/ping', cache.withTtl('1 hour'), (req, res) => {
  setTimeout(() => {
    res.end('pong');
  }, 2000);
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

app.get('/projects', (req, res) => {
  res.send(projectsjsonfile.get())
});


app.put('/createNewProject', (req, res) => {
  projectsjsonfile.set(fakeproject);
  res.send(projectsjsonfile.get());
});



app.get('/compilers', cache.withTtl(`${settings.CACHE_TTL} hours`), (req, res) => {
  util.getLicensedCompilers((licensedCompilers) => {
    res.json(licensedCompilers);
  });
});




// IMPORTANT! Cache everything below this line for 1 minute (defaultTtl)
app.use(cache);

// CACHE





const server = app.listen(settings.LISTEN_ON_PORT_NUMBER, () => {
  console.log(`MSC Express RESTful API backend listening at http://localhost:${settings.LISTEN_ON_PORT_NUMBER}`);
});

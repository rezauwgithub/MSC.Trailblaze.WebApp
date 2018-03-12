// server.js

const app = require('express')();
const bodyParser = require('body-parser');
const editJsonFile = require('edit-json-file');
const settings = require('./__backend_app_settings__');
const util = require('./util');
const logger = require('morgan');
const apicache = require('apicache');


const cache = apicache.options({
  debug: true
}).middleware;

/*
  if the file doesn't exist, the content will be an empty object by default.
*/
const projectsjsonfile = editJsonFile(`${__dirname}/jsonDBs/projects.json`, {
  autosave: true
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
  To prevent errors from Cross Origin Resource Sharing, we will set
  our headers to allow CORS with middleware like so:
*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});


app.use(logger('dev' || 'prod'));


// add route to display cache index
app.get('/api/cache', (req, res) => {

  console.log('/api/cache was called!');

  console.log('apicache.getIndex(): ' + JSON.stringify(apicache.getIndex()));
  res.send(apicache.getIndex())
});

// add route to manually clear target/group
app.get('/api/cache.clear/:target?', (req, res) => {

  console.log(`/api/cache.clear/:target? was called for ${req.params.target}!`);

  console.log('apicache.getIndex()');
  res.send(apicache.clear(req.params.target))
});


/* 
  The initial call to this will take 2 seconds, but any subsequent calls 
  will receive a response instantly from cache for the next hour
*/
app.get('/api/examples.ping', cache('2 minutes'), (req, res) => {

  setTimeout(() => {
    res.end('pong, ping, pong, pong, and cheese, cheese, cheese');
  }, 10000);

});



app.get('/api/compilers.names', cache(`${settings.CACHE_TTL} minutes`), (req, res) => {

  console.log('/api/compilers.name was called!');

  
  setTimeout(() => {
    console.log(`Querying "fake" compilers for...`);
    res.send([
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
  }, 20000);
  

  /*
  util.getLicensedCompilers((licensedCompilers) => {
    res.json(licensedCompilers);
  });
  */
  

});


app.post('/api/compiler.details', (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.details was called for ${req.body.addedCompiler.name}!`);

  
  setTimeout(() => {
    console.log(`Querying "fake" compilers details for...`);
    res.send(
      {
        userGuidePDFPath: '/path/to/userGuide/PDF',
        process: 'exampleProcess3232',
        compiler: 'exampleCompiler23232',
        baseFileVersion: 'exampleBaseFileVersion88'
      },
    )
  }, 20000);
  

  /*
  util.getCompilerDetails(req.body.addedCompiler, (compilerDetails) => {
    res.send(compilerDetails);
  });
  */

});


app.post('/api/compiler.options', (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.options was called for ${req.body.addedCompiler.name}!`);

  
  setTimeout(() => {
    console.log(`Querying "fake" compilers options for...`);
    res.send(
      {
        value: req.body.addedCompiler.value,
        name: req.body.addedCompiler.name
      },
    )
  }, 20000);
  

  /*
  util.getCompilerOptions(req.body.addedCompiler, (compilerOptions) => {
    res.send(compilerOptions);
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

  console.log('/api/projects was called!');

  res.send(projectsjsonfile.get())
});


app.put('/api/createNewProject', (req, res) => {

  console.log(`/api/createNewProject was called for ${fakeproject}!`);

  projectsjsonfile.set(fakeproject);
  res.send(projectsjsonfile.get());
});



const server = app.listen(settings.LISTEN_ON_PORT_NUMBER, () => {
  console.log(`MSC Express RESTful API backend listening at http://localhost:${settings.LISTEN_ON_PORT_NUMBER}`);
});
// server.js

const app = require('express')();
const bodyParser = require('body-parser');
const editJsonFile = require('edit-json-file');
const logger = require('morgan');
const chalk = require('chalk');
const mcache = require('memory-cache');
const settings = require('./__backend_app_settings__');
const util = require('./util'); 

let cache = (duration) => {

  return (req, res, next) => {

    let key = '__express__' + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {

      console.log(`${chalk.blue('[cache]')} ${chalk.yellow('sending cached (memory-cache) version')} of ${req.originalUrl || req.url}.`); 

      res.send(cachedBody);

      return;

    } else {

      res.sendResponse = res.send;
      console.log(`${chalk.blue('[cache]')} adding cache entry for "${req.originalUrl || req.url}" for TTL of ${settings.CACHE_TTL} seconds.`);
      res.send = (body) => {
        mcache.put(key, body, duration * 1000, () => {
          console.log(`${chalk.red('[cache]')} cache entry "${req.originalUrl || req.url}" has expired!`);
        });
        res.sendResponse(body);
      }

      next();
    }

  }

}



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


app.get('/api/compilers.names', cache(settings.CACHE_TTL), (req, res) => {

  console.log('/api/compilers.name was called!');

  util.getLicensedCompilers((licensedCompilers) => {
    res.json(licensedCompilers);
  });

});


app.get('/api/compiler.options.user/:compilervalue', cache(settings.CACHE_TTL), (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.options.user was called for ${global.licensedCompilersjsonArr[req.params.compilervalue].name}!`);

  util.getCompilerUserOptions(req.params.compilervalue, (compilerUserOptions) => {
    res.send(compilerUserOptions);
  });

});


app.get('/api/compiler.options.project/:compilervalue', cache(settings.CACHE_TTL), (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.options.project was called for ${global.licensedCompilersjsonArr[req.params.compilervalue].name}!`);

  if (settings.USE_FAKE_DATA) {

    setTimeout(() => {
      console.log(`Querying so called compilers options for...`);
      res.send(
        {
          value: req.params.compilervalue,
          name: util.licensedCompilersjsonArr[req.params.compilervalue].name
        },
      )
    }, 20000);

  } else {

    util.getCompilerProjectOptions(req.params.compilervalue, (compilerProjectOptions) => {
      res.send(compilerProjectOptions);
    });

  }

});


app.get('/api/compiler.options.developer/:compilervalue', cache(settings.CACHE_TTL), (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.options.developer was called for ${global.licensedCompilersjsonArr[req.params.compilervalue].name}!`);

  if (settings.USE_FAKE_DATA) {

    setTimeout(() => {
      console.log(`Querying so called compilers options for...`);
      res.send(
        {
          value: req.params.compilervalue,
          name: util.licensedCompilersjsonArr[req.params.compilervalue].name
        },
      )
    }, 20000);

  } else {

    util.getCompilerDeveloperOptions(req.params.compilervalue, (compilerDeveloperOptions) => {
      res.send(compilerDeveloperOptions);
    });

  }

});


app.get('/api/compiler.options.compiler/:compilervalue', cache(settings.CACHE_TTL), (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.options.compiler was called for ${global.licensedCompilersjsonArr[req.params.compilervalue].name}!`);

  if (settings.USE_FAKE_DATA) {

    setTimeout(() => {
      console.log(`Querying so called compilers options for...`);
      res.send(
        {
          value: req.params.compilervalue,
          name: util.licensedCompilersjsonArr[req.params.compilervalue].name
        },
      )
    }, 20000);

  } else {

    util.getCompilerCompilerOptions(req.params.compilervalue, (compilerCompilerOptions) => {
      res.send(compilerCompilerOptions);
    });

  }

});


app.get('/api/compiler.options.all/:compilervalue', cache(settings.CACHE_TTL), (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.options.all was called for ${global.licensedCompilersjsonArr[req.params.compilervalue].name}!`);

  if (settings.USE_FAKE_DATA) {

    setTimeout(() => {
      console.log(`Querying so called compilers options for...`);
      res.send(
        {
          value: req.params.compilervalue,
          name: util.licensedCompilersjsonArr[req.params.compilervalue].name
        },
      )
    }, 20000);

  } else {

    util.getCompilerAllOptions(req.params.compilervalue, (compilerAllOptions) => {
      res.send(compilerAllOptions);
    });

  }

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


app.use((req, res) => {
  res.status(404).send('Oops... Where did that page go? Hmm...')
});




const server = app.listen(settings.LISTEN_ON_PORT_NUMBER, () => {
  console.log(`MSC Express RESTful API backend listening at http://localhost:${settings.LISTEN_ON_PORT_NUMBER}`);
});




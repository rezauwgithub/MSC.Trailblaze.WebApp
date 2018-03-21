// server.js

const app = require('express')();
const bodyParser = require('body-parser');
const editJsonFile = require('edit-json-file');
const logger = require('morgan');
const mcache = require('memory-cache');
const settings = require('./__backend_app_settings__');
const util = require('./util'); 


let cache = (duration) => {
  
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);

      return;

    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
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

  if (settings.USE_FAKE_DATE) {
    setTimeout(() => {
      console.log(`Querying compilers names from mscmc...`);
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
      
    }, 45441);

  } else {
  
    util.getLicensedCompilers((licensedCompilers) => {
      res.json(licensedCompilers);
    });

  }

});


app.get('/api/compiler.details/:compilervalue', cache(settings.CACHE_TTL), (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.details was called for ${global.licensedCompilersjsonArr[req.params.compilervalue].name}!`);

  if (settings.USE_FAKE_DATE) {

    setTimeout(() => {

    console.log(`Querying compilers details for...`);

    switch (global.licensedCompilersjsonArr[req.params.compilervalue].name) {
      case 'COMPILERTest426723':
        res.send(
          {
            userGuidePDFPath: '/path/to/userGuide/COMPILERTest426723PDF',
            process: 'exampleProcessCOMPILERTest426723',
            compiler: 'exampleCompilerCOMPILERTest426723',
            baseFileVersion: 'exampleBaseFileVersionCOMPILERTest426723',
            columnOptions: [
              {
                title: 'rezaMem',
                dataType: 'int'
              },
              {
                title: 'rezaBytes',
                dataType: 'int'
              },
              {
                title: 'sli',
                dataType: 'bool'
              }
            ]
          },
        )

        break;

      case 'COMPILERTest4223':
        res.send(
          {
            userGuidePDFPath: '/path/to/userGuide/COMPILERTest4223PDF',
            process: 'exampleProcessCOMPILERTest4223',
            compiler: 'exampleCompilerCOMPILERTest4223',
            baseFileVersion: 'exampleBaseFileVersionCOMPILERTest4223',
            columnOptions: [
              {  
                title: 'rezaBits',
                dataType: 'int'
              },
              {
                title: 'rezaMem',
                dataType: 'int'
              },
              {
                title: 'sli',
                dataType: 'bool'
              }
            ]
          },
        )

        break;

      case 'COMPILERTest424323':
        res.send(
          {
            userGuidePDFPath: '/path/to/userGuide/COMPILERTest424323PDF',
            process: 'exampleProcessCOMPILERTest424323',
            compiler: 'exampleCompilerCOMPILERTest424323',
            baseFileVersion: 'exampleBaseFileVersionCOMPILERTest424323',
            columnOptions: [
              {  
                title: 'rezaLong',
                dataType: 'int'
              },
              {
                title: 'sli',
                dataType: 'bool'
              }
            ]
          },
        )

        break;


      case 'COMPILERTest4243523':
        res.send(
          {
            userGuidePDFPath: '/path/to/userGuide/COMPILERTest4243523PDF',
            process: 'exampleProcessCOMPILERTest4243523',
            compiler: 'exampleCompilerCOMPILERTest4243523',
            baseFileVersion: 'exampleBaseFileVersionCOMPILERTest4243523',
            columnOptions: [
              {  
                title: 'rezaBits',
                dataType: 'int'
              },
              {
                title: 'rezaBytes',
                dataType: 'int'
              },
              {
                title: 'sli',
                dataType: 'bool'
              }
            ]
          },
        )

        break;

      
      default:
        res.send(
          {
            userGuidePDFPath: '/path/to/userGuide/DEFAULTPDF',
            process: 'exampleProcessDEFAULT',
            compiler: 'exampleCompilerDEFAULT',
            baseFileVersion: 'exampleBaseFileVersionDEFAULT',
            columnOptions: [
              {  
                title: 'rezaBits',
                dataType: 'int'
              },
              {
                title: 'rezaBytes',
                dataType: 'int'
              },
              {
                title: 'sli',
                dataType: 'bool'
              }
            ]
          },
        )

        break;

      }

    }, 20000);

  } else {

    util.getCompilerDetails(req.params.compilervalue, (compilerDetails) => {
      res.send(compilerDetails);
    });

  }

});


app.get('/api/compiler.options/:compilervalue', cache(settings.CACHE_TTL), (req, res) => {

  // body parser lets us use the req.body
  console.log(`/api/compilers.options was called for ${global.licensedCompilersjsonArr[req.params.compilervalue].name}!`);

  if (settings.USE_FAKE_DATE) {

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

    util.getCompilerOptions(req.params.compilervalue, (compilerOptions) => {
      res.send(compilerOptions);
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
  res.status(404).send('Oops. Where did that page go? Hmm...')
});


const server = app.listen(settings.LISTEN_ON_PORT_NUMBER, () => {
  console.log(`MSC Express RESTful API backend listening at http://localhost:${settings.LISTEN_ON_PORT_NUMBER}`);
});




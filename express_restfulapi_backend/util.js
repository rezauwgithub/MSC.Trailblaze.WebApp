const { exec } = require('child_process');
const chalk = require('chalk');

const settings = require('./__backend_app_settings__');


global.licensedCompilersjsonArr = [];


module.exports.getLicensedCompilers = (callback) => {

  console.log(chalk.cyan(`getLicensedCompilers() got called!`));
  console.log(chalk.cyan(`Querying mscmc for licensed compilers...`));

  const command = `ssh reza@fusion15 mscmc -list;`;
  console.log(chalk.cyan('Running command ' + command));


  if (settings.USE_FAKE_DATA) {
    console.log('[USING FAKE DATA]')

    setTimeout(() => {

      global.licensedCompilersjsonArr.push({ value: 0, name: 'BIST8584' });
      global.licensedCompilersjsonArr.push({ value: 1, name: 'COMP852' });
      global.licensedCompilersjsonArr.push({ value: 2, name: 'MEM84352' });
      global.licensedCompilersjsonArr.push({ value: 3, name: 'RAM02910' });


      callback(global.licensedCompilersjsonArr);

    }, 5441);

  } else {
  
    exec(command, (err, stdout, stderr) => {

      if (err) {
        console.error(chalk.red(`exec error: ${err}`));
        return;
      }

      let new_stdout = stdout.split("\t\t");
      let rStrLines = new_stdout[1].split("\n");
  
      let value = 0;
      for (let i = 0; i < rStrLines.length; i++) {
        const compilerName = rStrLines[i].split(" =")[0];
        if (compilerName !== "" || compilerName.startsWith(" ")) {
          console.log('compilerName: ' + compilerName);
          global.licensedCompilersjsonArr.push({ value: value++, name: compilerName });
        }
      }


      callback(global.licensedCompilersjsonArr);
    });
      
  }

}


module.exports.getCompilerUserOptions = (compilervalue, callback) => {

  console.log(`getCompilerUserOptions() got called for ${global.licensedCompilersjsonArr[compilervalue].name}!`);
  console.log(`Querying mscmc for compiler (${global.licensedCompilersjsonArr[compilervalue].name}) user options...`);

  const command = `ssh reza@fusion15 mscmc -options user ${licensedCompilersjsonArr[compilervalue].name}`;
  console.log('Running command ' + command);

  exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];
      console.log('stdout: ' + stdout);
      

      callback(jsonStrArr);
  });
}


module.exports.getCompilerProjectOptions = (compilervalue, callback) => {

  console.log(`getCompilerProjectOptions() got called for ${global.licensedCompilersjsonArr[compilervalue].name}!`);
  console.log(`Querying mscmc for compiler (${global.licensedCompilersjsonArr[compilervalue].name}) project options...`);

  const command = `ssh reza@fusion15 mscmc -options project ${licensedCompilersjsonArr[compilervalue].name}`;
  console.log('Running command ' + command);

  exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];
      console.log('stdout: ' + stdout)


      callback(jsonStrArr);
  });
}


module.exports.getCompilerDeveloperOptions = (compilervalue, callback) => {

  console.log(`getCompilerDeveloperOptions() got called for ${global.licensedCompilersjsonArr[compilervalue].name}!`);
  console.log(`Querying mscmc for compiler (${global.licensedCompilersjsonArr[compilervalue].name}) developer options...`);

  const command = `ssh reza@fusion15 mscmc -options developer ${licensedCompilersjsonArr[compilervalue].name}`;
  console.log('Running command ' + command);

  exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];
      console.log('stdout: ' + stdout)


      callback(jsonStrArr);
  });
}


module.exports.getCompilerCompilerOptions = (compilervalue, callback) => {

  console.log(`getCompilerCompilerOptions() got called for ${global.licensedCompilersjsonArr[compilervalue].name}!`);
  console.log(`Querying mscmc for compiler (${global.licensedCompilersjsonArr[compilervalue].name}) compiler options...`);

  const command = `ssh reza@fusion15 mscmc -options compiler ${licensedCompilersjsonArr[compilervalue].name}`;
  console.log('Running command ' + command);

  exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];
      console.log('stdout: ' + stdout)


      callback(jsonStrArr);
  });
}


module.exports.getCompilerAllOptions = (compilervalue, callback) => {

  console.log(`getCompilerAllOptions() got called for ${global.licensedCompilersjsonArr[compilervalue].name}!`);
  console.log(`Querying mscmc for compiler (${global.licensedCompilersjsonArr[compilervalue].name}) all options...`);

  const command = `ssh reza@fusion15 mscmc -options all ${licensedCompilersjsonArr[compilervalue].name}`;
  console.log('Running command ' + command);

  exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];
      console.log('stdout: ' + stdout)


      callback(jsonStrArr);
  });
}








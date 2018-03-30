const { exec } = require('child_process');
const chalk = require('chalk');

const settings = require('./__backend_app_settings__');


global.licensedCompilersjsonArr = [];
global.addedCompilerDetailsMap = {};
global.addedCompilerAllOptionsMap = {};
global.addedCompilerCompilerOptionsMap = {};
global.addedCompilerDeveloperOptionsMap = {};
global.addedCompilerProjectOptionsMap = {};
global.addedCompilerUserOptionsMap = {};



module.exports.getLicensedCompilers = (callback) => {

  console.log(chalk.cyan(`getLicensedCompilers() got called!`));
  console.log(chalk.cyan(`Querying mscmc for licensed compilers...`));

  const command = `ssh reza@fusion15 mscmc -list;`;
  console.log(chalk.cyan('Running command ' + command));


  if (settings.USE_FAKE_DATA) {
    console.log('[USING FAKE DATA]');

    setTimeout(() => {

      global.licensedCompilersjsonArr.push({ value: 0, name: 'BIST180' });
      global.licensedCompilersjsonArr.push({ value: 1, name: 'ROM-LV-TS55ULP' });
      global.licensedCompilersjsonArr.push({ value: 2, name: 'SP-LVR-TS55EF' });
      global.licensedCompilersjsonArr.push({ value: 3, name: 'RF1P-LV-GF28SLP' });


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


  if (settings.USE_FAKE_DATA) {
    console.log('[USING FAKE DATA]');

    setTimeout(() => {

      exampleOptionsData = [];

      exampleOptionsData.push('BISTName = NULL');
      exampleOptionsData.push('BISTName:datatype = string');

      exampleOptionsData.push('ID = 171');
      exampleOptionsData.push('ID:datatype = integer');
      exampleOptionsData.push('ID:compiler = 171');

      exampleOptionsData.push('error_depth = 8');
      exampleOptionsData.push('error_depth:datatype = integer');
      exampleOptionsData.push('error_depth:compiler = 8');

      exampleOptionsData.push('error_depth_extra = 0');
      exampleOptionsData.push('error_depth_extra:datatype = integer');
      exampleOptionsData.push('error_depth_extra:compiler = 0');

      exampleOptionsData.push('instance_count = 1');
      exampleOptionsData.push('instance_count:datatype = integer');
      exampleOptionsData.push('instance_count:compiler = 1');

      exampleOptionsData.push('instance_ids = auto::');
      exampleOptionsData.push('instance_ids:datatype = list');
      exampleOptionsData.push('instance_ids:compiler = auto::');

      exampleOptionsData.push('instance_list = comma::seperated::list');
      exampleOptionsData.push('instance_list:datatype = list');
      exampleOptionsData.push('instance_list:compiler = comma::seperated::list');

      exampleOptionsData.push('keep_diag_addr = true');
      exampleOptionsData.push('keep_diag_addr:datatype = boolean');
      exampleOptionsData.push('keep_diag_addr:compiler = true');

      exampleOptionsData.push('keep_expect_data = false');
      exampleOptionsData.push('keep_expect_data:datatype = boolean');
      exampleOptionsData.push('keep_expect_data:compiler = false');

      exampleOptionsData.push('march_depth = 40');
      exampleOptionsData.push('march_depth:datatype = integer');
      exampleOptionsData.push('march_depth:compiler = 40');

      exampleOptionsData.push('verbose = false');
      exampleOptionsData.push('verbose:datatype = boolean');
      exampleOptionsData.push('verbose:compiler = false');
  

      addedCompilerUserOptionsMap[compilervalue] = [];


      let currentOption = null;
      let currentjsonObj = {};
      exampleOptionsData.forEach((element) => {
        
        let elementArr = element.split(" = ");
        let leftElement = elementArr[0];
        let rightElement = elementArr[1];

        
        let leftElementArr = leftElement.split(":")
        if (leftElementArr[1] === undefined) {
          if (currentOption !== null) {
            addedCompilerUserOptionsMap[compilervalue].push(currentjsonObj);
            currentjsonObj = {};
          }

          currentOption = leftElement;
          currentjsonObj.option = currentOption;
          currentjsonObj.placeholder = rightElement;

        } else {
          currentjsonObj[leftElementArr[1]] = rightElement;
        }

      });
      addedCompilerUserOptionsMap[compilervalue].push(currentjsonObj);

      console.log(JSON.stringify(addedCompilerUserOptionsMap[compilervalue]));
      callback(JSON.stringify(addedCompilerUserOptionsMap[compilervalue]));

    }, 5441);

  } else {

    exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];
      console.log('stdout: ' + stdout);
      

      callback(jsonObj);
    });

  }

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








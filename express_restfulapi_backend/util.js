const { exec } = require('child_process');


global.licensedCompilersjsonArr = null;

module.exports.getLicensedCompilers = (callback) => {

  console.log(`getLicensedCompilers() got called!`);
  console.log(`Querying mscmc for licensed compilers...`);

  const command = `ssh reza@fusion15 mscmc -list;`;
  console.log('Running command ' + command);

  exec(command, (err, stdout, stderr) => {

    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    

    let new_stdout = stdout.split("\t\t");
    let rStrLines = new_stdout[1].split("\n");

    let value = 0;
    licensedCompilersjsonArr = [];
    for (let i = 0; i < rStrLines.length; i++) {
      const compilerName = rStrLines[i].split(" =")[0];
      if (compilerName !== "" || compilerName.startsWith(" ")) {
        console.log('compilerName: ' + compilerName);
        licensedCompilersjsonArr.push({ value: value++, name: compilerName });
      }
    }
    

    callback(licensedCompilersjsonArr);
  });

}




module.exports.getCompilerDetails = (compilervalue, callback) => {

  console.log(`getCompilerDetails() got called for ${global.licensedCompilersjsonArr[compilervalue].name}!`);
  console.log(`Querying mscmc for compiler (${global.licensedCompilersjsonArr[compilervalue].name}) details...`);

  const command = `ssh reza@fusion15 mscmc -info ${global.licensedCompilersjsonArr[compilervalue].name}`;
  console.log('Running command ' + command);

  exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];

      var rStrArrIFC = stdout.split("INFO FOR COMPILER");

      var rStrArrRI = null;
      if (rStrArrIFC.length == 2) {
          rStrArrRI = rStrArrIFC[1].split("RANGE INFORMATION");
  
          var infoParts = rStrArrRI[0].split("## ");
  
          // User Guide
          var userGuidePDFPath = infoParts[1].split(":")[1].trim().split("\n")[0];
          console.log("userGuidePDFPath-->" + userGuidePDFPath + "<--");
  
          // Customer
          var customer = infoParts[2].split(":")[1].trim();
          console.log("customer-->" + customer + "<--");
  
          // Process
          var process = infoParts[3].split(":")[1].trim();
          console.log("process-->" + process + "<--");
  
          // Compiler
          var compiler = infoParts[4].split(":")[1].trim();
          console.log("compiler-->" + compiler + "<--");
  
          // BaseFile Version
          var baseFileVersion = infoParts[5].split(":")[1].trim();
          console.log("baseFileVersion-->" + baseFileVersion + "<--");


          console.log("RANGE-INFO: " + rStrArrRI[1]);


          jsonStrArr.push({
              name: global.licensedCompilersjsonArr[compilervalue].name,
              user_guide: userGuidePDFPath,
              customer: customer,
              process: process,
              compiler: compiler,
              basefile_version: baseFileVersion
          });
      }

      callback(jsonStrArr);
  });
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
      console.log('stdout: ' + stdout)


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








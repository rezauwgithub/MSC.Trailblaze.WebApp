const { exec } = require('child_process');

module.exports.getLicensedCompilers = (callback) => {

  console.log(`getLicensedCompilers() got called!`);
  console.log(`Querying mscmc for licensed compilers...`);

  const command = `ssh reza@fusion15 mscmc -list;`;

  exec(command, (err, stdout, stderr) => {

    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    let jsonStrArr = [];

    let new_stdout = stdout.split("\t\t");
    let rStrLines = new_stdout[1].split("\n");

    let value = 0;
    for (let i = 0; i < rStrLines.length; i++) {
      const compilerName = rStrLines[i].split(" =")[0];
      if (compilerName !== "" || compilerName.startsWith(" ")) {
        console.log('compilerName: ' + compilerName);
        jsonStrArr.push({ value: value++, name: compilerName });
      }
    }

    callback(jsonStrArr);
  });

}




module.exports.getCompilerDetails = (addedCompiler, callback) => {

  console.log(`getCompilerDetails() got called for ${addedCompiler.name}!`);
  console.log(`Querying mscmc for compiler (${addedCompiler.name}) details...`);

  const command = `ssh reza@fusion15 mscmc -info ${addedCompiler.name}`;

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
              name: addedCompiler.name,
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



module.exports.getCompilerOptions = (addedCompiler, callback) => {

  console.log(`getCompilerOptions() got called for ${addedCompiler.name}!`);
  console.log(`Querying mscmc for compiler (${addedCompiler.name}) options...`);

  const command = `ssh reza@fusion15 mscmc -options all ${addedCompiler.name}`;

  exec(command, (err, stdout, stderr) => {
      if (err) {
          console.error(`exec error: ${err}`);
          return;
      }


      var jsonStrArr = [];
      console.log('stdout: ' + stdout)


      // callback(jsonStrArr);
  });
}



const { exec } = require('child_process');

module.exports.getLicensedCompilers = (callback) => {

  console.log(`Querying mscmc for available compilers...`);
  const command = `ssh reza@fusion15 mscmc -list;`;

  exec(command, (err, stdout, stderr) => {

    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    let jsonStrArr = [];

    let new_stdout = stdout.split("\t\t");
    let rStrLines = new_stdout[1].split("\n");

    for (let value = 0; value < rStrLines.length; value++) {
      const compilerName = rStrLines[value].split(" =")[0];
      if (compilerName !== "") {
        console.log('compilerName: ' + compilerName);
        jsonStrArr.push({ value: value, name: compilerName });
      }
    }

    callback(jsonStrArr);
  });

}

const { exec } = require('child_process');
const nodeJSONDB = require('node-json-db');



module.exports.getAvailableCompilers = function(callback) {
    
    console.log(`queryAvailableCompilerNames got called!`);

 
    const command = `ssh reza@fusion15 mscmc -list`;

    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }

        let jsonDB = new nodeJSONDB('db/dbAvailableCompilers.json', true, true);

        var jsonStrArr = [];

        var new_stdout = stdout.split("\t\t");
        var rStrLines = new_stdout[1].split("\n")
        
        for (let value= 0; value < rStrLines.length; value++) {
            var compilerName = rStrLines[value].split(" =")[0];
            if (compilerName !== "") {
                console.log('compilerName: ' + compilerName);

                jsonStrArr.push({ value: value, name: compilerName });

                jsonDB.push(`/${value}/value`, value);
                jsonDB.push(`/${value}/name`, compilerName);
            }
        }

        callback(jsonStrArr);
    });
}






module.exports.querySelectedCompilerDetails = (selectedCompiler, callback) => {

    console.log(`querySelectedCompilerDetails got called for ${selectedCompiler}!`);

    const command = `ssh reza@fusion15 mscmc -info ${selectedCompiler}`;

    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
    
        let jsonDB = new nodeJSONDB(`db/db${selectedCompiler}.json`, true, true);



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
                name: compilerName,
                user_guide: userGuidePDFPath,
                customer: customer,
                process: process,
                compiler: compiler,
                basefile_version: baseFileVersion
            });
        }

        callback(jsonStrArr.join());
    });
}



const { exec } = require('child_process');
const JsonDB = require('node-json-db');


var db = new JsonDB('db.json', true, true);


module.exports.queryCompilerNames = function(callback) {
    
    console.log(`queryCompilerNames got called!`);

    const command = `ssh reza@fusion15 mscmc -list`;

    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }


        var jsonStrArr = [];

        var new_stdout = stdout.split("\t\t");
        var rStrLines = new_stdout[1].split("\n")
        
        for (let id= 0; id < rStrLines.length; id++) {
            var compilerName = rStrLines[id].split(" =")[0];
            if (compilerName !== "") {
                console.log('compilerName: ' + compilerName);

                jsonStrArr.push({ id: id, value: compilerName.toLowerCase(), label: compilerName });

                db.push(`/${id}/id`, id);
                db.push(`/${id}/name`, compilerName);
            }
        }

        callback(jsonStrArr);
    });
}






module.exports.queryCompilerDetails = function(compilerName, callback) {

    const command = `ssh reza@fusion15 mscmc -info ${compilerName}`;

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
                name: compilerName,
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


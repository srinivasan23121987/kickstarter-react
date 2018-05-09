const path = require('path');
const solc = require('solc');
const fs = require('fs');
const fsextra = require('fs-extra');
const buildpath = path.resolve(__dirname, "build");
fsextra.removeSync(buildpath);
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fsextra.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;
fsextra.ensureDirSync(buildpath);
for (let contract in output) {
    myString = contract.slice(1)
    fsextra.outputJSONSync(
        path.resolve(buildpath, myString + ".json"),
        output[contract]
    );
}

const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const fs = require('fs');

module.exports = function (deployer) {

    let owner = '0x4EE177cB4D9E3852f08EEB5343Df98ec615AD278';
    let firstAirline = '0xfb5f95af69cc73a91Cf9e73d5aB534D2E8A19E5b';
    deployer.deploy(FlightSuretyData, {from: firstAirline}).then(() => {
        return deployer.deploy(FlightSuretyApp, FlightSuretyData.address, {from: owner}).then(() => {
            let config = {
                localhost: {
                    url: 'ws://localhost:7545',
                    dataAddress: FlightSuretyData.address,
                    appAddress: FlightSuretyApp.address
                }
            };
            fs.writeFileSync(__dirname + '/../src/dapp/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
            fs.writeFileSync(__dirname + '/../src/server/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
        });
    });
};
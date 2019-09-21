
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x4EE177cB4D9E3852f08EEB5343Df98ec615AD278",
        "0xfb5f95af69cc73a91Cf9e73d5aB534D2E8A19E5b",
        "0x0Ef9dA467F55369f85addE643FD5E347AF9bff33",
        "0xb6132e62eE5b6D14876175B959fFE10E84bf7251",
        "0x8d71C10aAdf5F5e65a82CC2574ead97a6C7789cd",
        "0xdBcb84e87Ba18507F6E10058355c80C6fa3357D0",
        "0xe31F5bA3115bD2Aa34Fc8Be6e8f021569899b077",
        "0x23E7698BE3948F0B615D42433D266d20A46F837C",
        "0x3A59a5aE6E9b602F3A31e593b8e4a2D3eA7E4c17",
        "0x7eafAa66a768a7CE7041f8ed4FaCd92b522Ee717"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new({from: firstAirline});
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
};

module.exports = {
    Config: Config
};
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "point have strategy remind cancel core fan path sword fancy toss long";

module.exports = {
    networks: {
        development: {
            provider: function () {
                return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
            },
            network_id: '*',
        }
    },
    compilers: {
        solc: {
            version: "^0.4.25"
        }
    }
};
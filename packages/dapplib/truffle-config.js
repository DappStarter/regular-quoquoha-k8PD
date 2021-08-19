require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth shift pupil imitate problem sure seed'; 
let testAccounts = [
"0xa80cf5403f3ca241cc1d419e80cd8a0d73c117a9e741a22dbc531df6d8a712d3",
"0xb54bac08608a60d24db5bf4ffc336ab7b8098e801ea3619ccea49a398b94690a",
"0xb5c89460cec2a8c1c7f75a80184a8d235305a53e853544af978aad550e37658c",
"0x4ed185ef3bdcb10029c9fc81aa3cef4b205dd1726fa5707a0a4880ea7ed929ec",
"0x6feec4c1567a4cbe833ce0de32a9dcd002dcb8945952f611efc7744c96468db9",
"0x9314086f96c85b276f434ea2dfcb2505c5f0cd678666ebf30c60dfa98366d390",
"0x338fd6cd88586f133ea65f9089b506f0fe267953a3c21109eccf84f09af23ad6",
"0x24deb95e17921df89b6ca429a7d35be52afe4504cda7013b034603db13bc5c61",
"0xf1052baab371dded5ccef307ab423258f5cccd286d8c9d3d92a96f914ddd7a25",
"0x61c64898243f9eaf8f7b48c9c59cfe296cb8d7f3bf2c9aeb07f4020e460c604c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



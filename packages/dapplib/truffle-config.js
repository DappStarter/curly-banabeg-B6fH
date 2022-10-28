require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stomach cost ridge clump grace define army gas'; 
let testAccounts = [
"0x12e6a00d3d5a2005c8d79a9fcd2777ab4706145d2c072ac9d9ea489c266c3c00",
"0x3ae7a16d9ba67a8e652a5a915ce6f345e9aee2ee77e2c6c763d8012685153d8d",
"0x61d40dfefe79a98e96e8d82ec38d009543934b122a153cd3cc212324f890ad3c",
"0xe15a8e2fde4d1b302594837bee95e00f3858a2e363cfa2d380106fa51832a9e8",
"0x192f8d5dfb9ea0c12f3183e17e4febe17e08deb661c48b656e1ffa0d003ad436",
"0x213a1b0afd4241c6964895e31accd61d5a61fe52d8db86ce4d1e5364588d0884",
"0xdd920842c075221836e1c47422b0cdcc779fab80ef3608dc85a78112b99ef4aa",
"0x1e8276c3e01fd4824411bbe3b421f24d4b581eba71a1a90fc7220a28b5edbc33",
"0xbcdb80d3aedabf7ba884f3cfd2d052f216264ab3c76b3efacf241ce3f24ae15c",
"0xd8ef0fc36c576829e50f63a65e28a46f2f0c896c01f0060793900cd35f20f1b0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


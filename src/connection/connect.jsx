const ABI = require('../abi.json');
const Web3 = require('web3');

const contractAddress = "0x11bcD925D9c852a3eb40852A1C75E194e502D2b9";
let address = null;

const web3 = new Web3(window.ethereum);

if (window.ethereum) {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        console.log('Wallet Connected');
        address = result[0];
        console.log(address);
    })
} else {
    console.log('please install metamask')
}

const myContract = new web3.eth.Contract(ABI, contractAddress, { from: address });
console.log(myContract);

module.exports = { myContract, address };
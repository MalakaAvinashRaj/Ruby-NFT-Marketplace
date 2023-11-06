import { ethers } from 'ethers';

const abi = require('../abi.json');

const contractAddress = "0xE37d8a765925e76EaebA1A08a45A0367661Cf5e9"
const chainId = 80001;
const hexCode = '0x13881';
var address = null;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const networkSet = await provider.getNetwork();
const signer = provider.getSigner();

const nftABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
]

const checkAndChangeChainId = async () => {
    if (networkSet.chainId !== chainId) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: hexCode }],
            });
            return true;
        }
        catch (error) {
            console.error(error);
        }
    }
}
checkAndChangeChainId();


const connectWallet = async () => {
    if (address == null) {
        await window.ethereum?.request({ method: 'eth_requestAccounts' }).then(result => {
            address = result[0]
            console.log(`wallet connected to ${address}`)
        })
        return address;
    }
    return address;
}

const getFloorPrice = async (projectId) => {
    const myContract = new ethers.Contract(contractAddress, abi, provider);
    const floorPrice = await myContract.floorPrice(projectId);
    return floorPrice;
}

const getOwner = async () => {
    const myContract = new ethers.Contract(contractAddress, abi, provider);
    const owner = await myContract.owner();
    return owner;
}

const getProject = async (projectId) => {
    const myContract = new ethers.Contract(contractAddress, abi, provider);
    const project = await myContract.projects(projectId);
    return project;
}

const getTotalProjects = async () => {
    const myContract = new ethers.Contract(contractAddress, abi, provider);
    const totalProjects = await myContract.totalProjects();
    return totalProjects;
}

const getListedNfts = async (projectId) => {
    const myContract = new ethers.Contract(contractAddress, abi, provider);
    const listedNfts = await myContract.getListedNFTs(projectId);
    return listedNfts;
}

const setAddProject = async (name, supply, nftContract, image) => {
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const addProject = await myContract.addProject(name, supply, nftContract, image);
    const tx = await addProject.wait();
    return tx;
}

const setFreezeProject = async (projectId) => {
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const freezeProject = await myContract.freezeProject(projectId);
    return freezeProject;
}

const setListNFT = async (project, nftId, price) => {
    console.log('1')
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    console.log(project.nftContract)
    const nftContract = new ethers.Contract(project.nftContract, nftABI, signer);
    console.log(nftContract);
    const transaction = await nftContract.approve(contractAddress, nftId);
    console.log(transaction);
    // const listNFT = await myContract.listNFT(projectId, nftId, price);
    // return listNFT;
}

const setPurchaseNft = async (projectId, nftId) => {
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const purchaseProject = await myContract.purchaseNFT(projectId, nftId);
    return purchaseProject;
}

const setRenounceOwnership = async () => {
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const renounceOwnership = await myContract.renounceOwnership();
    return renounceOwnership;
}

const setTransferOwnership = async (newOwner) => {
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const transferOwnership = await myContract.transferOwnership(newOwner);
    return transferOwnership;
}

export { connectWallet, checkAndChangeChainId, getOwner, getTotalProjects, getFloorPrice, getProject, getListedNfts, setAddProject, setFreezeProject, setListNFT, setPurchaseNft, setRenounceOwnership, setTransferOwnership };
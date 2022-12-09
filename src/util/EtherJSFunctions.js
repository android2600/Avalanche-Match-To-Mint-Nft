import { ethers } from "ethers";
import abi from "../abi.json";

export async function connectToWallet() {
  //Step 5 code here
  const provider = new ethers.providers.Web3Provider(window.ethereum); 
  await provider.send("eth_requestAccounts", []); 
  return provider.getSigner();
}

export async function getContract(signer) {
  //Step 6 code here
  const contractAddress = "0x316328f313f3386a958f9511bb686929c290e724"; 
  return new ethers.Contract(contractAddress, abi, signer);
}

export async function mintNFT(stringURI, contract) {
  //Step 7 code here
  const tx = await contract.mint(stringURI); 
  console.log("transaction:>> ", tx); 
  await tx.wait(); 
  return tx;
}

export function configureTokenURI(imageURL, name, description) {
  return JSON.stringify({
    name,
    description,
    image: imageURL,
    attributes: [],
  });
}

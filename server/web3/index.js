const ethers = require('ethers');
const Message = require('../contracts/Message.json');

const initWeb3 = async () => {
  try {
    // Get network provider and web3 instance.
    const provider = new ethers.providers.JsonRpcBatchProvider(
      "http://127.0.0.1:7545"
    );    
    const networkId = 5777;
    const deployedNetwork = Message.networks[networkId];
    const instance = new ethers.Contract(
      deployedNetwork.address,
      Message.abi,
      provider
    );

    // Handling the NewMesssage event.
    instance.on('NewMessage', (text) => {
      // Save the message from the contract to the db here.
      console.log(text);
    });
    
  } catch (error) {
    // Catch any errors for any of the above operations.
    console.log(
      `Failed to intialize web3 ethers`,
    );
    console.error(error);
  }
}

module.exports = { initWeb3 };

import React, { useState, useRef, useEffect } from "react";
import Message from "../../contracts/Message.json";
import getWeb3 from "../../services/getWeb3";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import "./style.scss";

function App() {
  const messageRef = useRef();
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  /**
   * Component did mount event
   */
  useEffect(() => {
    initWeb3();
  }, []);

  /**
   * Init web3
   */
  const initWeb3 = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Message.networks[networkId];

      const instance = new web3.eth.Contract(
        Message.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.      
      // this.setState({ web3, accounts, contract: instance }, this.runExample);
      setWeb3(web3);
      setAccounts(accounts);
      setContract(instance);

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }

  

  /**
   * 
   */
  const sendMessage = async () => {
    const message = messageRef.current.value;
    
    // Stores a given value
    await contract.methods.set(message).send({ from: accounts[0] });


    // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();
  };

  /**
   * Handling the send button click event
   */
  const handleClickSend = () => {
    if(web3 && accounts && contract)
    sendMessage();
  }

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="App">
      <TextInput placeholder="Type here..." inputRef={messageRef}/>
      <Button label="Send" onClick={handleClickSend}></Button>
    </div>
  );
  
}

export default App;

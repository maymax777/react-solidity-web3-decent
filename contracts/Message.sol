// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Message {
  
  // Events
  event NewMessage(string text);

  // Private states
  string text;
  
  // setter
  function set(string memory _text) public {
    text = _text;
    emit NewMessage(_text);
  }

  // getter
  function get() public view returns (string memory) {
    return text;
  }
}

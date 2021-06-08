var SimpleStorage = artifacts.require("./Message.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};

var Inbox = artifacts.require("./Inbox.sol");

contract('Inbox', (accounts) => {

  // It has the message from the constructor argument as per deployed contract
  it("it has the default message", () => {
    return Inbox.deployed().then((instance) => {
      return instance.message.call();
    }).then((message) => {
      assert.equal(message, "Hello World", "The default message should be correct");
    });
  });
  
  // It has the message from the constructor argument as per new contract
  it("it has the specified message for a new contract", () => {
    return Inbox.new('New Contract')
        .then((myInbox) => myInbox.message.call())
        .then((message) => {
            assert.equal(message, "New Contract", "The message for a new contract should be correct");
        });
  });
});

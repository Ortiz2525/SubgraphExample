// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract MiiToken is ERC20, Ownable {
    string private _name;
    event NameChanged(string newName, address by);
    constructor(uint256 initialSupply) ERC20("MiiToken", "MIT") {
        _name = "MiiToken";
        _mint(msg.sender, initialSupply);
    }
    function changeName(string memory name) public onlyOwner {
       _name = name;
       emit NameChanged(name, msg.sender);
    }
    function getName() public view returns (string memory){
        return _name;
    }
}
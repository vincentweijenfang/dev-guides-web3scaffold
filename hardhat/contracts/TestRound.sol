//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TestRound {
    function getInteger(uint256 amount) public pure returns (uint256) {
        uint256 number = amount/10;
        return number;
    }

    function getInteger() public returns (uint256) {
        return 1;
    }
}
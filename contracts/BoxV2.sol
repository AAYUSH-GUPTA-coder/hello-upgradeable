// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.10;

contract Box {
    uint public val;

    function initilaize(uint _val) external {
        val = _val;
    }
}
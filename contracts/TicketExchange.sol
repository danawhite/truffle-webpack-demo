pragma solidity ^0.4.0;

contract TicketExchange {
    address public seller;
    uint public ticketPrice;

    function TicketExchange (address _seller, uint _ticketPrice) {
        seller = _seller;
        ticketPrice = _ticketPrice;
    }

    struct Buyer {
        address addr;
        uint amount;
    }

    //modifier noTicketsLeft() {
      //  if (now >= deadline) _;
    //}
}

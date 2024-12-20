let {EventEmitter} = require('events')

class TicketManager extends EventEmitter
{
    constructor(totalSupply)
    {
        super();
        this.totalSupply = totalSupply
    }

    buy(buyerEmail, cost ){
        if(this.totalSupply > 0)
            {
                this.totalSupply--;
                this.emit("buy", buyerEmail, cost, Date.now());
            }
        else this.emit("OoS",buyerEmail, cost, Date.now())
    }
}

module.exports.TicketManager = TicketManager
let {TicketManager} = require('./TicketManager')

let tm = new TicketManager(2);
tm.addListener('buy', ()=>{
    console.log("A ticket sold!!!")
})

tm.once('buy', ()=>{
    console.log('boni hogayi')
})

tm.addListener('OoS', (mail, paise)=>{
    console.log(`We just lost a customer! - ${mail} & ${paise}$`)
})

tm.buy("hello@ai.com", 100)
tm.buy("hello@ai.com", 100)
tm.buy("aryanmangla@google.com", 500)
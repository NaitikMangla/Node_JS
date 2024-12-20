console.log("this is main file of my Module")

function runApp(){
    console.log("App is runnning")
}

let helper = require('./helper.js');
module.exports.helper = helper
module.exports.runApp = runApp
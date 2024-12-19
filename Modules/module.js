console.log("This is Ecma module")
function print(x){
    console.log(x)
}

let str = "naitik "

function add(x, y)
{
    return x + y
}

console.log(add(21,87))

export {print, add}
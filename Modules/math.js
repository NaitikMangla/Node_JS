function add(a, b)
{
    return a + b
}

function subtract(a, b)
{
    return a - b
}

console.log("module 1")
let a = 10
let b = 20
console.log(add(a, b))

// Default exporting
// module.exports = add
// module.exports = subtract // override the given property


// Named exporting
// module.exports.plus = add
// module.exports.minus = subtract

// mixed exporting :
module.exports = add
module.exports.minus = subtract 
const assertEquals = require("./test-framework")
const Basket = require('../src/basket.js')


/// TEST CASE 1
//1.Setup
//let basket = new Basket()
let bagel = 'plain bagel'
let expected = 1
//2.Execute
let actual = new Basket().addToBasket(bagel)
//3.Verify
console.log(assertEquals(expected,actual))


/// TEST CASE 2
//1.Setup
bagel = 'plain bagel'
expected = 0
//2.Execute
actual = new Basket().removeFromBasket(bagel)
//3.Verify
console.log(assertEquals(expected, actual))

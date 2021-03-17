const assertEquals = require("./test-framework")
const Basket = require('../src/basket.js')


/// TEST CASE 1
//1.Setup
console.log('Checking if addToBasket() method works properly')
let bagel = new Basket()
let expected = 1
//2.Execute
let actual = bagel.addToBasket('item')
//3.Verify
console.log(assertEquals(expected,actual))



/// TEST CASE 2
//1.Setup
console.log('Checking if addToBasket() method works properly')
bagel = new Basket()
bagel.addToBasket('item1')
bagel.addToBasket('item2')
bagel.addToBasket('item3')
expected = 4
//2.Execute
actual = bagel.addToBasket('item4')
//3.Verify
console.log(assertEquals(expected, actual))



//TEST CASE 3
//1.Setup
console.log('Checking if removeFromBasket() method works properly')
bagel = new Basket()
bagel.addToBasket('item1')
bagel.addToBasket('item2')
bagel.addToBasket('item3')
expected = 2
//2.Execute
actual = bagel.removeFromBasket('item2')
//3.Verify
console.log(assertEquals(expected, actual))



//TEST CASE 4 = for checking whether my basket is full
//1.Setup
console.log('Checking if isFul() method evaluates to be false when the size of basket is less than its capacity')
bagel = new Basket()
bagel.addToBasket('item1')
expected = 2
//2.Execute
actual = bagel.addToBasket('item2')
//3. Verify 
console.log(assertEquals(expected,actual))



//TEST CASE 5 - for checking whether my basket is full, and whether the size of the basket was increased.
//1.Setup
console.log('Checking if the capacity of the basket increases as the basket was full beforehand')
bagel = new Basket()
bagel.addToBasket('item1')
bagel.addToBasket('item2')
bagel.addToBasket('item3')
bagel.addToBasket('item4')
bagel.addToBasket('item5')
expected = 6
//2.Execute
actual = bagel.addToBasket('item6')

//3.Verify
console.log(assertEquals(expected,actual))





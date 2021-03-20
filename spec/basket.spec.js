const assertEquals = require("./test-framework")
const Basket = require('../src/basket.js')


/// TEST CASE 1
//1.Setup
console.log('1.Checks if addToBasket() method works')
let basket = new Basket()
let expected = 1
//2.Execute
let actual = basket.addToBasket('bagel1', 1)
//3.Verify
console.log(assertEquals(expected,actual))



/// TEST CASE 2
//1.Setup
console.log('2.Checks if addToBasket() method works')
basket = new Basket()
basket.addToBasket('bagel1', 1)
basket.addToBasket('bagel2',2)
basket.addToBasket('bagel3',3)
expected = 4
//2.Execute
actual = basket.addToBasket('bagel4')
//3.Verify
console.log(assertEquals(expected, actual))



//TEST CASE 3
//1.Setup
console.log('3.Checks if removeFromBasket() method works')
basket = new Basket()
basket.addToBasket('bagel1', 1)
basket.addToBasket('bagel2', 2)
basket.addToBasket('bagel3' ,3)
expected = 2
//2.Execute
actual = basket.removeFromBasket('bagel2')
//3.Verify
console.log(assertEquals(expected, actual))



//TEST CASE 4 
//1.Setup
console.log('4.Checks if isFull() method works')
basket = new Basket()
basket.addToBasket('bagel1', 1)
expected = false
//2.Execute
actual = basket.isFull()
//3. Verify 
console.log(assertEquals(expected,actual))



//TEST CASE 5
//1.Setup
console.log('5.Checks if isFull() method works')
basket = new Basket()
basket.addToBasket('bagel1', 1)
basket.addToBasket('bagel2', 2)
basket.addToBasket('bagel3', 3)
basket.addToBasket('bagel4', 4)
basket.addToBasket('bagel5', 5)
expected = true
//2.Execute
actual = basket.isFull()
//3. Verify 
console.log(assertEquals(expected,actual))



//TEST CASE 6
//1.Setup
console.log('6.Checks if addtoBasket() method works when basket is full')
basket = new Basket()
basket.addToBasket('bagel1', 1)
basket.addToBasket('bagel2', 2)
basket.addToBasket('bagel3', 3 )
basket.addToBasket('bagel4', 4 )
basket.addToBasket('bagel5', 5)
expected = 'Your basket is full'
//2.Execute
actual = basket.addToBasket('bagel5')
//3. Verify 
console.log(assertEquals(expected,actual))



//TEST CASE 7
//1.Setup
console.log('7.Checks if removeFromBasket() method throws an error when you do not have the item in the basket')
basket = new Basket()
basket.addToBasket('bagel1')
basket.addToBasket('bagel2')
expected = 'This item is not in your basket'
//2.Execute
actual = basket.removeFromBasket('bagel3')
//3.Verify
console.log(assertEquals(expected,actual))



//TEST CASE 8
console.log('8.Checks the ID of the item')
//1.Setup
basket = new Basket()
basket.addToBasket('bagel1', 1)
expected = 'You already have an item with this ID'
//2.Execute
actual = basket.addToBasket('bagel2',1)
//3.Verify
console.log(assertEquals(expected,actual))



//TEST CASE 9
console.log('9.Checks the total sum of the bagels')
//1.Setup
basket = new Basket()
basket.addToBasket('bagel1', 1, 0.50)
basket.addToBasket('bagel2', 2, 0.60)
expected = 1.10
//2.Execute
actual = basket.total()
//3.Verify
console.log(assertEquals(expected,actual))



//TEST CASE 10
console.log('10.Checks the total sum of the bagels')
//1.Setup
basket = new Basket()
basket.addToBasket('bagel1', 1, 0.50)
basket.addToBasket('bagel2', 2, 0.60)
basket.removeFromBasket('bagel2', 2, -0.60)
expected = 0.50
//2.Execute
let result = Number(parseFloat(basket.total()).toPrecision(3))   // I had to use this snippet of code because of floating point numeric precision.
actual =  result 
//3.Verify
console.log(assertEquals(expected,actual))





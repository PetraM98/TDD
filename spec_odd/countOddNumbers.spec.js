const assertEquals = require('./test-framework.js')
const CountOddNumbers = require('./CountOddNumbers.js')
// TEST CASE 1
//1.Setup
console.log('I would like to test this : [1,2,3,4,5,6,] => 3')
let input = [1,2,3,4,5,6,]
let expectedOutPut = 3
//2.Execute
let actualOutPut = CountOddNumbers(input)
//3.Verify
let result = assertEquals (actualOutPut, expectedOutPut)
console.log(result)


// TEST CASE 2
//1.Setup
console.log('I would like to test this : [0,1,2]  => 1')
input =[0,1,2]
expectedOutPut = 1
//2.Execute
actualOutPut = CountOddNumbers(input)
//3.Verify
result = assertEquals(actualOutPut, expectedOutPut)
console.log(result)



//TEST CASE 3
//1.Setup
console.log('I would like to test this : [0,1,2]  => 1')
input = [2, 4 ,6] 
expectedOutPut = 0
//2.Execute
actualOutPut = CountOddNumbers(input)
//3.Verify
result = assertEquals(actualOutPut, expectedOutPut)
console.log(result)
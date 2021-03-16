const assertEquals = require ('./test-framework.js');
const CountEvenNumbers = require('./countEvenNumbers.js')


// 1. TEST CASE
//1. Setup
console.log("Testing that [1,2,3,4,5,6] => 3")
let input = [1,2,3,4,5,6]
let expectedOutput = 3

//2.Execute
let actualOutput = CountEvenNumbers(input)

//3.Verify
let result = assertEquals(actualOutput, expectedOutput)
console.log(`The result for the first test case is: ${result} `)



// 2. SECOND TEST CASE
// 1.Setup
console.log("Testing that [0,1,2] => 2")
input = [0,1,2]
expectedOutput = 2

//2.Execute
let actualOutPut = CountEvenNumbers(input)

//3.Verify
result = assertEquals(actualOutPut, expectedOutput)
console.log(`The result for the second test case is: ${result}`)



// 3. TEST CASE
//1.Setup
console.log("Testing that [1,3,5] => 0")
input = [1,3,5]
expectedOutput = 0 

//2.Execute
actualOutput = CountEvenNumbers(input)

//3.Verfiy
result = assertEquals(actualOutput, expectedOutput)
console.log(`The result for the third test case is: ${result} `)

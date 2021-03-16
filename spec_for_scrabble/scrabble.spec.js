const assertEquals = require('./test-framework.js')
const Scrabble =  require('../src_for_scrabble/scrabble.js')

// TEST CASE 1
//1.Setup
console.log("testing that ''=> 0")
 word = ''
let expectedOutPut = 0
//2.Execute
let actualOutPut  = new Scrabble(word).score()
//3.Verify
let result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)


// TEST CASE 2
//1.Setup
console.log('testing that " \t\n" => 0')
word = " \t\n"
expectedOutPut = 0
//2.Execute
actualOutPut  = new Scrabble(word).score()
//3.Verify
result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)



// TEST CASE 3
console.log('testing that null => 0')
word = null
expectedOutPut = 0
//2.Execute
actualOutPut  = new Scrabble(word).score()
//3.Verify
 result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)



// TEST CASE 4
console.log("testing that 'a' => 1")
word = 'a'
expectedOutPut = 1
//2.Execute
actualOutPut  = new Scrabble(word).score()
//3.Verify
result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)



// TEST CASE 5
console.log("testing that 'f' => 4")
word = 'f'
expectedOutPut = 4
//2.Execute
actualOutPut  = new Scrabble(word).score()
//3.Verify
 result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)



// TEST CASE 6
console.log("testing that 'street' => 6")
word = 'street'
expectedOutPut = 6
//2.Execute
actualOutPut  = new Scrabble(word).score()
//3.Verify
 result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)



// TEST CASE 7
console.log("testing that 'quirky' => 22")
word = 'quirky'
expectedOutPut = 22
//2.Execute
actualOutPut  = new Scrabble(word).score()
//3.Verify
 result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)



// TEST CASE 8
console.log("testing that 'OXYPHENBUTAZONE' => 41")
word = 'OXYPHENBUTAZONE'
expectedOutPut = 41
//2.Execute
actualOutPut  = new Scrabble(word).score()
//3.Verify
 result = assertEquals(expectedOutPut, actualOutPut)
console.log(result)

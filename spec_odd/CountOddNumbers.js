function CountOddNumbers(input){
    let counter = 0; 
    for (let j = 0; j < input.length; j++){
        if(input[j] %2 != 0){
            counter+=1
        }
    }
    return counter
}
module.exports = CountOddNumbers
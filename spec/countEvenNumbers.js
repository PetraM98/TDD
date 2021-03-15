function CountEvenNumbers (input){
    let counter = 0; 
    for (let i = 0; i < input.length; i++){
        if (input[i] % 2 ===0){
            counter+=1
        }
    }
    return counter;
}
module.exports = CountEvenNumbers
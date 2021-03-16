class Basket{
    constructor(bagel){
        this.basket = []
        //return this.basket
    }
    addToBasket(bagel){
        this.basket.push(bagel)
        return this.basket.length
    }
    removeFromBasket(bagel){
        const index = this.basket.indexOf(bagel)
        this.basket.splice(index, 1)
        return this.basket.length
//
    }

}

let bagel = new Basket()
//console.log(bagel.addToBasket('plain bagel'))
//console.log(bagel.addToBasket('salty bagel'))
///console.log(bagel.addToBasket('blueberry bagel'))
//console.log(bagel.removeFromBasket('plain bagel'))
//console.log(bagel.removeFromBasket('blueberry bagel'))
module.exports = Basket

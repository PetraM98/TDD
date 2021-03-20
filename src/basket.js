class Basket{
    constructor(){
        this.ids = [];
        this.basket = [];
        this.prices = [];
        this.individualPrices =[];
        this.capacity = 5
       
    }
    addToBasket(bagel,id, price){
        if (!this.ids.includes(id)){
        if (!this.isFull()){
            this.basket.push(bagel)
            this.ids.push(id)
            this.prices.push(price)
            return this.basket.length
        }
        else {
            return 'Your basket is full'
        }
    }
    else {
        return 'You already have an item with this ID'
    }
      
         }
    removeFromBasket(bagel,id, price){
        if (!this.basket.includes(bagel)){
            return 'This item is not in your basket'
        }
        else{
        const index = this.basket.indexOf(bagel)
        this.basket.splice(index, 1)
        this.prices.push(price)
        return this.basket.length
 }
    }
    isFull(){
        return this.basket.length >= this.capacity
    }

    checkPrice(bagel, price){
        this.individualPrices.push(bagel + '-' + price)
    }
    total(){
        return this.prices.reduce((a, b) => a + b, 0)
    }

}



module.exports = Basket


